import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx/mdx-components";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} — jamey.build`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, { theme: "github-light", keepBackground: false }],
        ],
      },
    },
  });

  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <main>
      <div className="wrap">
        <header className="article-header">
          <span className="overline">Blog</span>
          <h1>{post.frontmatter.title}</h1>
          <div className="article-meta">
            <span>{formattedDate}</span>
            <span>{post.readingTime} min read</span>
          </div>
        </header>
        <div className="article-divider" />
        <article className="mdx-content">{content}</article>
      </div>
    </main>
  );
}
