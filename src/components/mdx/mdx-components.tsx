import type { MDXComponents } from "mdx/types";

function Callout({ children }: { children: React.ReactNode }) {
  return <aside className="callout">{children}</aside>;
}

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mdx-h2" {...props} />,
  h3: (props) => <h3 className="mdx-h3" {...props} />,
  a: (props) => (
    <a
      className="mdx-link"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  pre: (props) => <pre className="mdx-pre" {...props} />,
  code: (props) => <code className="mdx-code" {...props} />,
  ul: (props) => <ul className="mdx-ul" {...props} />,
  ol: (props) => <ol className="mdx-ol" {...props} />,
  blockquote: (props) => <blockquote className="mdx-blockquote" {...props} />,
  Callout,
};
