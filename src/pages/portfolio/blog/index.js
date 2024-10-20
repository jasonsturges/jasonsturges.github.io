import Link from "next/link";
import PortfolioLayout from "../../../components/layouts/PortfolioLayout";
import fs from "fs";
import path from "path";

export default function PortfolioBlogList({ posts }) {
  return (
    <PortfolioLayout>
      <h1>Portfolio Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/portfolio/blog/${post.slug}`}>
              {post.title} - {post.date}
            </Link>
          </li>
        ))}
      </ul>
    </PortfolioLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("src", "content", "portfolio"));

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.(js|jsx)$/, "");
      const { default: Component } = await import(`../../../content/portfolio/${slug}`);
      const metadata = Component.metadata || {
        title: slug.replace(/-/g, " "),
        date: "2023-10-01", // Example date, you could use more sophisticated metadata handling if needed
      };

      return {
        slug,
        title: metadata.title,
        date: metadata.date,
      };
    }),
  );

  return {
    props: {
      posts,
    },
  };
}
