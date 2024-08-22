function Home() {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex items-center w-10/12">
        <div className="w-6/12 md:w-9/12">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-wide">
            See the <span className="text-[#ff4a01]">Spotlight</span> before it
            Shines
          </h1>
          <h2 className="text-gray-400 text-xl md:text-3xl mt-4">
            Get insights into your song’s potential with our Spotify-driven
            predictions
          </h2>
        </div>
        <div className="w-6/12 md:w-3/12">
          <div className="w-[300px] sm:w-[300px] md:w-[250px] lg:w-[350px] xl:w-[500px] pr-6">
            <img src="/Home1.png" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
