import Head from "next/head";
import MapComponent from "../components/Results/MapComponent";

function Maps({ results }) {
  return (
    <div>
      <Head>
        <title>Google Maps</title>
      </Head>

      <MapComponent results={results} />
    </div>
  );
}

export default Maps;

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://geocode.search.hereapi.com/v1/geocode?q=${context.query.term}&apiKey=${process.env.hereKey}
    `
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      results: data,
    },
  };
}
