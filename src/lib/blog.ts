import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");
const WORDS_PER_MINUTE = 225;

export interface PostFrontmatter {
  title: string;
  date: string;
  tags: string[];
  description: string;
  draft: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: number;
}

function calculateReadingTime(content: string): number {
  // Strip code blocks before counting
  const stripped = content.replace(/```[\s\S]*?```/g, "");
  const words = stripped.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    const frontmatter = data as PostFrontmatter;

    return {
      slug,
      frontmatter,
      content,
      readingTime: calculateReadingTime(content),
    };
  });

  // Filter drafts in production
  const filtered =
    process.env.NODE_ENV === "production"
      ? posts.filter((p) => !p.frontmatter.draft)
      : posts;

  // Sort by date descending
  return filtered.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  const filepath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return undefined;

  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  return {
    slug,
    frontmatter,
    content,
    readingTime: calculateReadingTime(content),
  };
}
