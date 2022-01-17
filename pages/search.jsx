import Head from "next/head";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import SearchResults from "../components/Results/SearchResults";

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <Header All={"All"} />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

// NOTES -- next.JS - SSR FUNCTION - GET API DATA RETURN AS PROPS

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "0";

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.googleKey}&cx=${process.env.contextKey}&q=${context.query.term}&start=${startIndex}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      results: data,
    },
  };
}
