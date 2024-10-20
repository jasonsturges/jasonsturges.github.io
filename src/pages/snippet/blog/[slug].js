import SnippetLayout from "@/components/layouts/SnippetLayout.js";
import fs from "fs";
import html from "remark-html";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import { useRouter } from "next/router";

export default function SnippetPost({ content, metadata }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <SnippetLayout>
      <h1>{metadata.title}</h1>
      <p>{metadata.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src", "content", "snippet"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("src", "content", "snippet", slug + ".md"), "utf-8");

  const { data: metadata, content: rawContent } = matter(markdownWithMeta);

  const processedContent = await remark().use(html).process(rawContent);
  const content = processedContent.toString();

  return {
    props: {
      metadata,
      content,
    },
  };
}
