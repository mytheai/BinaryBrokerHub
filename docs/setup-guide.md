# Setup Guide — Pre-Session Checklist

Hướng dẫn 8 việc bạn cần làm offline trước phiên sau. Tham chiếu khi đang setup.

---

## 1. Tạo Supabase project

**Mục đích**: Provision database PostgreSQL cho BBH.

**Steps:**
1. Mở https://supabase.com/dashboard → sign in
2. Click nút **"New project"** (góc trên phải)
3. Fill form:
   - **Organization**: chọn org có sẵn (hoặc tạo mới với plan Free)
   - **Project name**: `binarybrokerhub` (lowercase, không khoảng trắng — dùng làm subdomain)
   - **Database Password**: tạo password mạnh (≥ 16 ký tự). **LƯU SOMEWHERE SECURE** (password manager) — không recover được nếu mất
   - **Region**: chọn `Southeast Asia (Singapore)` hoặc `Asia South (Mumbai)` — gần target geo nhất (India + APAC). Nếu prefer Frankfurt cho global balance EU/Asia: `Europe Central (Frankfurt)`
   - **Pricing Plan**: **Free** (đủ MVP — 500MB DB, 50MB storage, 50K MAU, 2GB egress)
4. Click **"Create new project"**
5. Wait ~2–3 phút (Supabase đang provision DB)

**Verify**: Dashboard hiển thị status badge **"Healthy"** + URL dạng `xxxxxxxxx.supabase.co`. Lưu lại Project Ref (đoạn `xxxxxxxxx`) — sẽ dùng trong steps sau.

---

## 2. Apply migration (schema)

**Mục đích**: Tạo 9 tables + seed data từ file `supabase/migrations/20260509000000_initial_schema.sql`.

**Cách A — Via SQL Editor (đề xuất cho lần đầu)**:
1. Supabase Dashboard → vào project vừa tạo
2. Sidebar trái → click **"SQL Editor"** (icon `</>`)
3. Click **"+ New query"** (góc trên phải)
4. Mở file `d:\BinaryBrokerHub\supabase\migrations\20260509000000_initial_schema.sql` trong VS Code
5. **Ctrl+A** → **Ctrl+C** (copy toàn bộ)
6. Paste vào Supabase SQL Editor (**Ctrl+V**)
7. Click **"Run"** button (hoặc **Ctrl+Enter**)
8. Wait for message **"Success. No rows returned"** ở dưới editor

**Verify**:
- Sidebar → **"Table Editor"** → thấy 9 tables: `regulators`, `brokers`, `broker_licenses`, `broker_warnings`, `methodology_versions`, `broker_scores`, `broker_geo_scores`, `affiliate_clicks`, `affiliate_conversions`
- Click table `regulators` → thấy 11 rows (FCA, CySEC, ASIC, CFTC, SVG-FSA, Mwali, VFSC, RBI, BAPPEBTI, SECP, ESMA)
- Click table `brokers` → thấy 3 rows (Pocket Option, Quotex, IQ Option)
- Click table `methodology_versions` → thấy 1 row v1.0

**Cách B — Via Supabase CLI (nếu prefer automation)**:
```bash
npm install -g supabase
supabase login
cd d:/BinaryBrokerHub
supabase link --project-ref xxxxxxxxx   # xxxxxxxxx = Project Ref từ step 1
supabase db push
```

---

## 3. Enable `pg_cron` extension

**Mục đích**: Auto-delete affiliate clicks > 30 ngày (GDPR/PDPA compliance).

**Steps:**
1. Supabase Dashboard → vào project
2. Sidebar → **"Database"** → **"Extensions"**
3. Search box: gõ **"pg_cron"**
4. Toggle ON (slider bên phải)
5. Wait vài giây cho enable hoàn tất
6. Mở SQL Editor → New query → paste:
```sql
select cron.schedule(
  'delete_old_affiliate_clicks',
  '0 3 * * *',
  $$ delete from affiliate_clicks where clicked_at < now() - interval '30 days' $$
);
```
7. Click **"Run"**

**Verify**: SQL Editor → New query → run:
```sql
select jobname, schedule, command from cron.job;
```
→ thấy job `delete_old_affiliate_clicks` listed.

---

## 4. Copy API keys vào `.env.local`

**Mục đích**: App connect được Supabase qua env vars.

**Steps:**
1. Supabase Dashboard → vào project
2. Sidebar → click **"Project Settings"** (icon bánh răng dưới cùng sidebar)
3. Tab **"API"**
4. Bạn sẽ thấy 3 thứ cần copy:
   - **Project URL**: dạng `https://xxxxxxxxx.supabase.co`
   - **anon public key**: dài, bắt đầu `eyJ...` — safe to expose browser
   - **service_role secret key**: dài, bắt đầu `eyJ...` — **NEVER expose, NEVER commit, NEVER paste vào frontend code**
5. Tạo file `.env.local` ở root repo:
   - Mở VS Code → folder `d:\BinaryBrokerHub`
   - Right-click panel files → **New File** → đặt tên `.env.local`
6. Mở `.env.example` (đã có sẵn trong repo) → copy toàn bộ
7. Paste vào `.env.local`
8. Replace placeholder values bằng values copy từ Supabase dashboard:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

**Verify**: Run `cat .env.local` (Bash) hoặc mở file trong VS Code → confirm 3 values đã được paste, không phải placeholder `xxxxx...`

⚠️ **CRITICAL**: `.env.local` đã được gitignored (xem `.gitignore`). Đừng đổi tên thành `.env`. Đừng commit. Nếu lỡ commit → revoke service_role key trong Supabase dashboard ngay (Settings > API > Reset).

---

## 5. Tạo email `info@binarybrokerhub.com` qua Hostinger

**Mục đích**: Email contact cho methodology Section 11 + future correspondence (broker affiliate signup).

**Steps:**
1. Login https://hpanel.hostinger.com
2. Dashboard → **Emails** (sidebar) hoặc **Email Accounts**
3. Click **"Create Email"** (hoặc **"Add Account"**)
4. Fill:
   - **Email**: `info@binarybrokerhub.com`
   - **Password**: password mạnh ≥ 12 ký tự, lưu vào password manager
5. Click **"Create"**
6. Wait DNS propagation (~10–60 phút — Hostinger thường nhanh ~10 phút)

**Setup forwarding (đề xuất)** — forward email tới Gmail để dễ check:
1. Hostinger panel → Email → click email vừa tạo → **"Forwarders"** hoặc **"Auto-reply"**
2. Add forward rule: `info@binarybrokerhub.com` → `truongpham0602@gmail.com`
3. Save

**Verify**:
- Mở https://webmail.hostinger.com → login với info@binarybrokerhub.com
- Hoặc gửi test email từ Gmail → `info@binarybrokerhub.com` → check tới (nếu forwarding) Gmail Inbox

**Optional — IMAP trong Gmail** (manage qua Gmail giao diện thay webmail):
- Gmail Settings → Accounts and Import → "Check email from other accounts" → Add → fill IMAP:
  - Server: `imap.hostinger.com`, Port `993`, SSL
  - SMTP: `smtp.hostinger.com`, Port `587`, STARTTLS

---

## 6. Generate `CLICK_HASH_SALT`

**Mục đích**: Random salt để hash IP cho affiliate_clicks (privacy compliance).

**Pick 1 cách:**

**Bash (Git Bash trên Windows hoặc WSL):**
```bash
openssl rand -hex 32
```

**PowerShell (Windows native):**
```powershell
$bytes = New-Object byte[] 32
[Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
-join ($bytes | ForEach-Object { $_.ToString('x2') })
```

**Node.js (cross-platform):**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Output là 64-character hex string, ví dụ:
```
a1b2c3d4e5f60718293a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f90
```

Copy → paste vào `.env.local`:
```
CLICK_HASH_SALT=a1b2c3d4e5f60718293a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f90
```

⚠️ Đừng dùng salt example trong file này — dễ bị guess.

---

## 7. Local dev test

**Mục đích**: Verify Next.js skeleton chạy được local trước khi deploy.

**Steps:**
1. Mở terminal (PowerShell hoặc Git Bash)
2. `cd d:\BinaryBrokerHub`
3. Run: `npm run dev`
4. Wait for output:
```
   ▲ Next.js 15.5.18
   - Local:   http://localhost:3000
   ✓ Ready in X.Xs
```
5. Mở browser: http://localhost:3000
6. Browser sẽ tự redirect → `http://localhost:3000/en`
7. Page hiển thị placeholder:
   - Title: "Honest Binary Options Broker Reviews"
   - Subtitle: "Independent rankings, transparent methodology, no pay-for-placement."
   - Button: "See our methodology"
8. Click button → **404** (chưa có `/methodology` route — OK ở stage này)
9. Press **Ctrl+C** trong terminal để stop server

**Common issues:**
- **Port 3000 in use**: server tự switch port 3001. Đọc terminal output để biết port mới.
- **Module not found**: chạy lại `npm install`
- **Browser blank/error**: check terminal cho runtime error message
- **Hot reload stuck**: Ctrl+C → restart `npm run dev`

---

## 8. (Optional) Git init + GitHub + Vercel

**Mục đích**: Version control + auto-deploy production. Có thể defer nếu chưa muốn push public.

### 8a. Git init

```bash
cd d:\BinaryBrokerHub
git init
git config user.name "Pham Truong"
git config user.email "truongpham0602@gmail.com"
```

### 8b. Initial commit

```bash
git add .
git commit -m "initial: bootstrap Next.js skeleton + methodology v1.0 + Supabase schema"
```

⚠️ Verify `.env.local` KHÔNG được include trong commit:
```bash
git status
```
→ `.env.local` không xuất hiện (vì đã gitignored). Nếu xuất hiện, **STOP** — kiểm tra `.gitignore`.

### 8c. Tạo GitHub repo

1. Mở https://github.com/new
2. Fill:
   - **Repository name**: `binarybrokerhub` hoặc `binarybrokerhub-com`
   - **Visibility**: **Private** (đề xuất — research outputs nên giữ private)
   - **Initialize repo**: KHÔNG tick (we have local files)
3. Click **"Create repository"**
4. Copy commands GitHub hiển thị (sẽ giống bên dưới):
```bash
git remote add origin https://github.com/{your-username}/binarybrokerhub.git
git branch -M main
git push -u origin main
```
5. Run trong terminal local

### 8d. Connect Vercel

1. Mở https://vercel.com/new
2. Section **"Import Git Repository"** → click **"Add GitHub Account"** nếu chưa connect
3. Authorize Vercel access GitHub
4. Search/select `binarybrokerhub` repo → click **"Import"**
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected ✓)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
6. Expand **"Environment Variables"** → add 6 biến (paste values từ `.env.local`):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (đánh dấu **Sensitive**)
   - `CLICK_HASH_SALT` (đánh dấu **Sensitive**)
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
   - `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC`
7. Click **"Deploy"**
8. Wait ~2 phút cho build + deploy
9. Vercel cấp URL: `binarybrokerhub-{hash}.vercel.app` → click để open

### 8e. Connect custom domain `binarybrokerhub.com`

**KHI READY** (có thể defer tới tháng 5–6):

1. Vercel project → **Settings** → **Domains**
2. Input `binarybrokerhub.com` → click **"Add"**
3. Vercel hiển thị 2 records cần add vào DNS:
   - `A` record: `@` → `76.76.21.21` (Vercel IP)
   - `CNAME` record: `www` → `cname.vercel-dns.com`
4. Login Hostinger panel → **Domains** → `binarybrokerhub.com` → **DNS / Nameservers**
5. Add 2 records trên (xóa A record cũ nếu có conflict)
6. Save → wait propagation 10–60 phút
7. Vercel auto-detect khi DNS ready → SSL cert auto-provision (Let's Encrypt)

**Verify**: `https://binarybrokerhub.com` → load homepage `/en/`

⚠️ **Khuyên defer step 8e tới tháng 5–6** vì khi domain live, Google sẽ start crawl. Nếu site placeholder chưa có content thật → Google index thin content → hurt SEO. Tốt hơn deploy lên Vercel preview URL (`vercel.app`) trong dev phase.

---

## Checklist tổng

Tick khi xong:
- [ ] Supabase project tạo + Healthy
- [ ] Migration SQL applied (9 tables + seed data verified)
- [ ] `pg_cron` extension enabled + retention job scheduled
- [ ] `.env.local` có 3 Supabase keys + `CLICK_HASH_SALT`
- [ ] Email `info@binarybrokerhub.com` hoạt động
- [ ] `npm run dev` → homepage `/en` render OK
- [ ] (Optional) Git init + push GitHub + Vercel deploy successful
- [ ] (Defer) Custom domain `binarybrokerhub.com` connect Vercel

Khi có khó khăn ở step nào → ghi note + back session sau, tôi sẽ debug từng cái.
