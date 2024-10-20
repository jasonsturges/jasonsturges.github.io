import SnippetLayout from "../../../components/layouts/SnippetLayout.js";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function SnippetBlogList({ posts }) {
  return (
    <SnippetLayout>
      <h1>Snippets</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/snippet/blog/${post.slug}`}>
              {post.title} - {post.date}
            </Link>
          </li>
        ))}
      </ul>
    </SnippetLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("src", "content", "snippet"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("src", "content", "snippet", filename), "utf-8");
    const { data: metadata } = matter(markdownWithMeta);

    return {
      slug: filename.replace(".md", ""),
      title: metadata.title,
      date: metadata.date,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
