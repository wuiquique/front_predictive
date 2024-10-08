import {
  MdConnectWithoutContact,
  MdOutlineFreeBreakfast,
  MdOutlineRocketLaunch,
  MdQueueMusic,
  MdSecurity,
  MdTrendingUp,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 mx-20">
        <div className="md:col-span-2 text-center md:text-start">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
            See the <span className="text-[#ff4a01]">Spotlight</span> before it
            Shines
          </h1>
          <h2 className="text-gray-400 text-xl md:text-3xl mt-4">
            Get insights into your song’s potential with our Spotify-driven
            predictions
          </h2>
          <button
            onClick={() => navigate("/songs")}
            className="text-2xl bg-[#ff4a01] p-2 w-60 rounded-full hover:bg-[#ff672b] mt-4"
          >
            Predict Now
          </button>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-0">
          <img
            src="/Home1.png"
            className="w-[300px] sm:w-[300px] md:w-[250px] lg:w-[350px] xl:w-[400px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-32 mb-10">
        <div className="py-1 px-10 bg-zinc-800 rounded-lg">Key Features</div>
        <h1 className="text-center text-5xl font-bold tracking-wide mt-4">
          The Must-Knows
        </h1>
        <h3 className="text-center text-gray-400 text-xl mt-4">
          The secret to a successful track lies in the details. Learn how these
          key features influence the popularity of your songs.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-20 mt-10">
        <div className="flex justify-center items-center mb-6 md:mb-0">
          <img src="/Home2.png" className="w-[350px]" />
        </div>
        <div>
          <h4 className="text-2xl font-semibold flex items-center">
            <MdTrendingUp />
            <span className="ms-2">How We Forecast Music Popularity</span>
          </h4>
          <p className="text-base text-gray-400">
            Our popularity prediction model dissects the key attributes of a
            song—duration, tempo, loudness, key, mode, and signature—to gauge
            its potential impact. By analyzing these features, we provide
            insights into how your track might resonate with listeners, helping
            you understand the elements that drive success in today’s music
            landscape.
          </p>
          <h4 className="text-2xl font-semibold mt-6 flex items-center">
            <MdQueueMusic />
            <span className="ms-2">Discover Similar Tracks</span>
          </h4>
          <p className="text-base text-gray-400">
            Our recommendation feature taps directly into Spotify’s vast music
            library to bring you songs that align with your song. By leveraging
            this integration, we offer personalized suggestions based on similar
            tracks, ensuring you know which music resonates the most with your
            song style.
          </p>
          <h4 className="text-2xl font-semibold mt-6 flex items-center">
            <MdConnectWithoutContact />
            <span className="ms-2">Find Artists to Collaborate With</span>
          </h4>
          <p className="text-base text-gray-400">
            By integrating with Spotify, we identify potential collaborators
            whose style complements yours, helping you grow your fan base and
            reach new listeners. Collaborating with the right artists can help
            you tap into new fan bases, amplify your audience, and boost your
            visibility in the music scene.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-40 mb-10">
        <div className="py-1 px-10 bg-zinc-800 rounded-lg">
          Unlock the Future
        </div>
        <h1 className="text-center text-5xl font-bold tracking-wide mt-4">
          How Our Predictive Model Works
        </h1>
        <h3 className="text-center text-gray-400 text-xl mt-4 mx-10 md:mx-20">
          Our predictive model analyzes key features of each song and provides a
          popularity score, estimating its potential to become a hit.
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 md:mx-20">
        <div className="group flex flex-col items-center hover:bg-zinc-800 p-6 rounded-md">
          <MdSecurity size={62} className="group-hover:text-[#ff4a01]" />
          <h4 className="text-2xl text-center mt-4">Data Consideration</h4>
          <h5 className="text-xl text-gray-400 text-center">
            We analyzed over 300k songs, focusing on the duration, key,
            loudness, mode, tempo, and time signature. These variables provide
            insight into the characteristics that influence popularity.
          </h5>
        </div>
        <div className="group flex flex-col items-center hover:bg-zinc-800 p-6 rounded-md">
          <MdOutlineRocketLaunch
            size={62}
            className="group-hover:text-[#ff4a01]"
          />
          <h4 className="text-2xl text-center mt-4">Regression Analysis</h4>
          <h5 className="text-xl text-gray-400 text-center">
            Using advanced regression techniques, the model evaluates the
            relationship between these features and historical popularity trends
            to predict future success.
          </h5>
        </div>
        <div className="group flex flex-col items-center hover:bg-zinc-800 p-6 rounded-md">
          <MdOutlineFreeBreakfast
            size={62}
            className="group-hover:text-[#ff4a01]"
          />
          <h4 className="text-2xl text-center mt-4">
            Popularity Potential Score
          </h4>
          <h5 className="text-xl text-gray-400 text-center">
            The output is a popularity prediction score ranging from 0 to 1,
            indicating how likely it is that the song will become popular based
            on the analyzed factors.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
