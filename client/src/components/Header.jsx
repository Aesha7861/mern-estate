import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import logo from "../Assets/img/logo.png";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <div
            style={{ height: "100%", width: "50px" }}
            className="flex flex-raw gap-2"
          >
            {/* <img src={logo} className=""/> */}
            <h1 className="font-bold text-lg sm:text-2xl flex flex-raw items-center">
              <span className="text-blue-900">Dream</span>
              <span className="text-teal-600 ">Follow</span>
            </h1>
          </div>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center "
        >
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-blue-900 hover:opacity-85" />
          </button>
        </form>

        <div className="hidden lg:block md:block">
        <ul className="flex gap-8">
          <Link to="/">
            <li className="font-bold hidden lg:block md:block text-blue-900 hover:underline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="font-bold hidden lg:block md:block text-blue-900 hover:underline">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="font-bold text-blue-900 hover:underline hidden lg:block md:block">
                Sign in
              </li>
            )}
          </Link>
        </ul>
       </div> 
        
        <div
          className="mobile-header-container lg:hidden md:hidden cursor-pointer"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        >
          <i className="fa-solid fa-bars hover:opacity-85"></i>
        </div>
      </div>
      {mobileSidebarOpen && <div className="backrgoundBlur"></div>}

      <div
        className={
          mobileSidebarOpen
            ? "mobileSidebar sidebarShow"
            : "mobileSidebar sidebarHidden"
        }
      >
        <div className="mobileHeader cursor-pointer">
          <i
            className="fa-solid fa-xmark hover:opacity-85"
            onClick={() => setMobileSidebarOpen(false)}
          ></i>
        </div>
        <div className="mobileBody">
          <ul onClick={() => setMobileSidebarOpen(false)}>
            <Link to="/">
              <li className="font-bold text-blue-900 hover:underline">Home</li>
            </Link>
            <Link to="/about">
              <li className="font-bold text-blue-900 hover:underline">About</li>
            </Link>

            <Link to="/profile">
              {currentUser ? (
                <></>
              ) : (
                <li className="font-bold text-blue-900 hover:underline">
                  Sign in
                </li>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
