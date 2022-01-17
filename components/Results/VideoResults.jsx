import Footer from "../Footer";

function VideoResults({ results }) {
  return (
    <>
      <div className="mx-auto w-full px-3 text-gray-800 mt-3 mb-6 sm:pl-[14%] lg:pl-52 ">
        {results.items?.map((result, i) => {
          return (
            <div key={i} className="mb-6 first:mt-2 sm:mt-4 sm:mb-6 ">
              <p className="text-sm">
                www.youtube.com <span>{">"}</span>
                <span className="text-gray-400"> watch</span>
              </p>
              <p className="text-xl text-blue-500 font-normal mb-1">
                {result.snippet.title}
              </p>
              <div className="flex flex-col sm:flex-row">
                <iframe
                  width="300"
                  height="160"
                  src={`https://www.youtube.com/embed/${result.id.videoId}`}
                  className="rounded-lg"
                  allowFullScreen
                ></iframe>
                <div className="sm:p-4 w-full sm:w-4/12">
                  <h1>{result.snippet.description}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default VideoResults;
