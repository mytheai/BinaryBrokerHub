import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1 className="mt-0 text-4xl font-bold tracking-tight" {...props} />
    ),
    h2: (props) => (
      <h2 className="mt-12 text-2xl font-semibold tracking-tight" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-8 text-xl font-semibold tracking-tight" {...props} />
    ),
    table: (props) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm" {...props} />
      </div>
    ),
    th: (props) => (
      <th
        className="border-b-2 border-gray-300 px-3 py-2 text-left font-semibold"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="border-b border-gray-200 px-3 py-2 align-top"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="my-6 border-l-4 border-gray-300 bg-gray-50 px-5 py-4 italic text-gray-700"
        {...props}
      />
    ),
    a: (props) => (
      <a className="text-blue-700 underline hover:text-blue-900" {...props} />
    ),
  };
}
