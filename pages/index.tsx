import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { GetStaticProps } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { content: "passing content" } };
};

async function getPosts() {
  const res = await fetch(`${window.location.href}/api/posts`);
  return await res.json();
}

export default function Index({ content }) {
  const { isLoading, error, data } = useQuery("post", getPosts);
  console.log(data);
  return (
    <main>
      index page
      <Link href="/pagetwo">
        <a>to page two</a>
      </Link>
      <ul>
        {data?.map((post) => {
          return <li>{post.title}</li>;
        })}
      </ul>
      <ReactQueryDevtools initialIsOpen />
    </main>
  );
}
