import { getAllPosts } from "@/lib/blog";
import BlogList from "./blog-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — jamey.build",
  description: "Writing on technology, running, design, and building things.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.frontmatter.tags))
  ).sort();

  return (
    <main>
      <div className="wrap">
        <div className="blog-header">
          <h1>Blog</h1>
          <p>
            Writing on technology, running, design, and building things.
          </p>
        </div>
        <BlogList
          posts={posts.map((p) => ({
            slug: p.slug,
            title: p.frontmatter.title,
            date: p.frontmatter.date,
            description: p.frontmatter.description,
            tags: p.frontmatter.tags,
            readingTime: p.readingTime,
          }))}
          allTags={allTags}
        />
      </div>
    </main>
  );
}
