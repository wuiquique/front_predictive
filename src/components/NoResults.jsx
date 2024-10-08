function NoResults({ root }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center sm:items-start w-10/12">
        <div className="flex flex-col items-center sm:items-start w-10/12 sm:w-4/5 mt-20 mb-20 sm:mb-52">
          <h1 className="text-6xl sm:text-9xl font-extrabold text-center sm:text-start">
            {root === "artists"
              ? "Well Hello..."
              : root === "songs"
              ? "Hey There!"
              : null}
          </h1>
          <h2 className="text-2xl sm:text-4xl text-gray-400 text-center sm:text-start mt-4">
            {root === "artists"
              ? "Dive in and see what’s trending—your next hit waiting!"
              : root === "songs"
              ? "Don’t be afraid—start exploring to find the next big hit!"
              : null}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default NoResults;
