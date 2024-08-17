import { useNavigate } from "react-router-dom";

function ButtonNav({ children, active = false, link }) {
    const navigate = useNavigate()

  return (
    <button
      className={
        active
          ? "flex justify-center items-center m-1 sm:m-2 md:w-24 sm:w-20 w-16 rounded-full text-lg bg-white text-black"
          : "flex justify-center items-center m-1 sm:m-2 md:w-24 sm:w-20 w-16 rounded-full text-lg hover:bg-[#818181] hover:text-black"
      }
      onClick={() => navigate("/" + link)}
    >
      {children}
    </button>
  );
}

export default ButtonNav;
