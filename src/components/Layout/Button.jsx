import { useNavigate } from "react-router-dom";

function ButtonNav({ children, active = false, link, disabled = false }) {
  const navigate = useNavigate();

  return (
    <button
      className={
        active
          ? "flex justify-center items-center m-1 sm:m-2 md:w-24 sm:w-20 w-16 rounded-full text-lg bg-white text-black"
          : disabled
          ? "flex justify-center items-center m-1 sm:m-2 md:w-24 sm:w-20 w-16 rounded-full text-lg text-gray-400"
          : "flex justify-center items-center m-1 sm:m-2 md:w-24 sm:w-20 w-16 rounded-full text-lg hover:bg-zinc-800 hover:text-white"
      }
      onClick={() => navigate("/" + link)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonNav;
