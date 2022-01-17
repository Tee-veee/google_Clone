import Head from "next/head";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import ImageResults from "../components/Results/ImageResults";

function Searchimages({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Images</title>
      </Head>

      <Header Images={"Images"} />
      <ImageResults results={results} />
    </div>
  );
}

export default Searchimages;

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.googleKey}&cx=${process.env.contextKey}&q=${context.query.term}&searchType=image`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      results: data,
    },
  };
}
