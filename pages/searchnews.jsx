import Head from "next/head";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import NewsResults from "../components/Results/NewsResults";

function Searchnews({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google News</title>
      </Head>
      <Header News={"News"} />

      <NewsResults results={results} />
    </div>
  );
}

export default Searchnews;

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=${context.query.term}&apiKey=${process.env.newsKey}&language=en`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      results: data,
    },
  };
}
