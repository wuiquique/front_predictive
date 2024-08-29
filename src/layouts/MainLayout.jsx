import { Outlet } from "react-router-dom";
import ButtonNav from "../components/Layout/Button";
import { useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function MainLayout() {
  const location = useLocation();

  return (
    <div>
      <header className="flex justify-center pb-8 sm:pb-20 pt-8">
        <ul className="flex justify-center items-center h-14 sm:border-solid sm:border-white sm:border-2 sm:rounded-full max-w-3xl">
          <li>
            <ButtonNav active={location.pathname === "/"} link={""}>
              Home
            </ButtonNav>
          </li>
          <li>
            <ButtonNav
              active={location.pathname.startsWith("/artists")}
              link={"artists"}
            >
              Artists
            </ButtonNav>
          </li>
          <li className="relative">
            <div className="mt-[-10px]">
              <img
                src="/1png.png"
                width={180}
                style={{
                  filter: "grayscale(100%)",
                  minWidth: "100px",
                  paddingLeft: "4px",
                }}
              />
            </div>
          </li>
          <li>
            <ButtonNav
              active={location.pathname.startsWith("/songs")}
              link={"songs"}
            >
              Songs
            </ButtonNav>
          </li>
          <li>
            <ButtonNav active={location.pathname === "/about"} link={"about"}>
              About
            </ButtonNav>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-zinc-800 px-20 py-6 grid grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-2">
        <div className="flex items-center justify-center sm:justify-start">
          <img src="/Home3.png" className="w-20" />
          <div className="ml-4">
            <h5>Luis Enrique Menéndez</h5>
            <h5 className="text-gray-400">lmenendez@unis.edu.gt</h5>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-end">
          <a href="https://www.linkedin.com/in/luis-enrique-menendez-figueroa-6953a925b/">
            <FaLinkedin size={32} className="text-white hover:text-gray-400" />
          </a>
          <a href="https://github.com/wuiquique" className="ml-4 text-white hover:text-gray-400">
            <FaGithub size={32} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
