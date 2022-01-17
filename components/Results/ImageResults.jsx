import Footer from "../Footer";
function ImageResults({ results }) {
  console.log(results);
  return (
    <>
      <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 sm:grid-rows-5 lg:grid-rows-2 lg:grid-cols-5 h-fit sm:h-[77vh] px-10 py-8">
        {results?.items?.map((result, i) => {
          return (
            <img
              src={result.link}
              key={i}
              className="h-full w-full object-contain"
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default ImageResults;
