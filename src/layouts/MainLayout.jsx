import { Outlet } from "react-router-dom";
import ButtonNav from "../components/Layout/Button";
import { useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();

  return (
    <div>
      <header className="flex justify-center mb-2 sm:mb-20 mt-2">
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
                style={{ filter: "grayscale(100%)", minWidth: "100px", paddingLeft: "4px" }}
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
      <footer className="bg-zinc-800 flex flex-col items-center">
        Footer Info
      </footer>
    </div>
  );
}

export default MainLayout;
