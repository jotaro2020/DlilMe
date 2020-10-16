import { GetStaticProps } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { content: "passing content" } };
};

export default function Index({ content }) {
  return (
    <main>
      index page
      <Link href="/pagetwo">
        <a>to page two</a>
      </Link>
      <div>passing content is here : {content}</div>
    </main>
  );
}
