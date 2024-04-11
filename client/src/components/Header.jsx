import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span style={{ color: "rgb(78, 161, 164)" }}>Dream</span>
            <span style={{ color: "rgb(30 65 113)" }}>Follow</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch style={{ color: "rgb(30 65 113)" }}></FaSearch>
        </form>
        <ul className="flex gap-8">

          <Link to="/">
            <li className="font-bold hidden sm:inline hover:underline" style={{ color: "rgb(30 65 113)" }}>
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="font-bold hidden sm:inline hover:underline" style={{ color: "rgb(30 65 113)" }}>
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" />
            ) : (
              <li className="text-slate-700 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
