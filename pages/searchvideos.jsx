import Head from "next/head";
import { useRouter } from "next/router";
import VideoResults from "../components/Results/VideoResults";
import Header from "../components/Header/Header";

function searchvideos({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Videos</title>
      </Head>

      <Header Videos={"Videos"} />
      <VideoResults results={results} />
    </div>
  );
}

export default searchvideos;

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${context.query.term}&key=${process.env.youtubeKey}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      results: data,
    },
  };
}
