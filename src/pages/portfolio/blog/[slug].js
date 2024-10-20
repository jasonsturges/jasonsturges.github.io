import PortfolioLayout from "../../../components/layouts/PortfolioLayout";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import { useRouter } from "next/router";

export default function PortfolioPost({ slug, metadata }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Dynamically import the component based on the slug
  const DynamicComponent = dynamic(() => import(`../../../content/portfolio/${slug}`));

  return (
    <PortfolioLayout>
      <h1>{metadata.title}</h1>
      <p>{metadata.date}</p>
      <DynamicComponent />
    </PortfolioLayout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src", "content", "portfolio"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(/\.(js|jsx)$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const filePathJs = path.join("src", "content", "portfolio", `${slug}.js`);
  const filePathJsx = path.join("src", "content", "portfolio", `${slug}.jsx`);

  let filePath = "";
  if (fs.existsSync(filePathJs)) {
    filePath = filePathJs;
  } else if (fs.existsSync(filePathJsx)) {
    filePath = filePathJsx;
  }

  if (filePath) {
    const { default: Component } = await import(`../../../content/portfolio/${slug}`);
    const metadata = Component.metadata || {
      title: slug.replace(/-/g, " "),
      date: "2023-10-01", // Example date, you could use more sophisticated metadata handling if needed
    };

    return {
      props: {
        slug,
        metadata,
      },
    };
  }

  return {
    notFound: true,
  };
}
