import PaginationButtons from "../../components/PaginationButtons";
import Footer from "../Footer";

function SearchResults({ results }) {
  return (
    <>
      <div className="mx-auto w-full px-3 text-gray-800 mt-3 mb-6 sm:pl-[14%] lg:pl-52">
        <p className="mb-4">
          About {results.searchInformation?.formattedTotalResults} results (
          {results.searchInformation?.formattedSearchTime} seconds)
        </p>

        {results.items?.map((result) => {
          return (
            <div className="max-w-xl mb-8" key={result.link}>
              <div className="group w-[300px] break-words">
                <a href={result.link} className="text-sm">
                  {result.formattedUrl}
                </a>
                <a href={result.link}>
                  <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                    {result.title}
                  </h2>
                </a>
              </div>

              <p>{result.snippet}</p>
            </div>
          );
        })}
        <PaginationButtons />
      </div>
      <Footer />
    </>
  );
}

export default SearchResults;
