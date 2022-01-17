import Footer from "../Footer";

function NewsResults({ results }) {
  return (
    <>
      <div className="mx-auto w-full px-3 text-gray-800 mt-3 mb-6 sm:pl-[14%] lg:pl-52">
        {results.articles?.map((result, i) => {
          return (
            <div
              className="flex flex-col sm:flex-row justify-between max-w-2xl mb-6 first:mt-2 sm:mt-4 sm:mb-6 border-2 border-gray-300 rounded-lg p-4"
              key={i}
            >
              <div className="flex-col ">
                <p className="text-sm text-gray-700 mb-1">
                  {result.source.name}
                </p>
                <div className="mb-2">
                  <a
                    href={result.url}
                    className="hover:text-blue-500 text-lg cursor-pointer"
                    target="_blank"
                  >
                    {result.title}
                  </a>
                </div>
                <p className="text-sm mb-2 sm:mb-0">
                  {result.description.substring(0, 120) + "..."}
                </p>
              </div>
              <div className="sm:ml-4">
                <img
                  src={result.urlToImage}
                  className="h-[100px] min-w-[120px] max-w-[150px]"
                />
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default NewsResults;
