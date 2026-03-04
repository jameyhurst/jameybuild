"use client";

import { useState } from "react";
import Link from "next/link";

interface PostSummary {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: number;
}

export default function BlogList({
  posts,
  allTags,
}: {
  posts: PostSummary[];
  allTags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <>
      <div className="blog-tags">
        <button
          className={`blog-tag ${activeTag === null ? "active" : ""}`}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`blog-tag ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="blog-list">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="blog-post-link"
          >
            <div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div className="blog-post-tags">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="blog-post-meta">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              {" · "}
              {post.readingTime} min read
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
