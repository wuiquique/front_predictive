function NoResults() {
  return (
    <div className="flex flex-col items-center sm:items-start w-10/12 sm:w-4/5 mt-20 mb-20 sm:mb-52">
      <h1 className="text-6xl sm:text-9xl font-extrabold text-center sm:text-start">
        Hey There!
      </h1>
      <h2 className="text-2xl sm:text-4xl text-gray-400 text-center sm:text-start mt-4">
        Don’t be afraid—start exploring to find the next big hit!
      </h2>
      {/* <div className="bg-white text-black p-2 rounded-lg text-sm sm:text-base text-center sm:text-start mt-8">
        There’s no need to focus on just your profile. Check out various artists
        and discover the best path to the top. ;)
      </div> */}
    </div>
  );
}

export default NoResults;
