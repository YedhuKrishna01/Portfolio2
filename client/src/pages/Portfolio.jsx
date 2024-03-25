import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <div>
      <nav className="h-32 grid grid-cols-2">
        <div className="flex items-center text-lg ps-10 pt-3 font-bold text-black rounded-tr-lg">
          <span className="bg-black text-white pl-2 rounded-3xl w-9 p-1 mr-[0.05rem]">
            YK
          </span>
          rishna
        </div>
        <div className="flex justify-end text-purple-900 font-normal items-center mr-14">
          <Link to="/" className="px-2">
            Home
          </Link>
          <Link to="/portfolio" className="px-2 border-b-2 border-purple-800">
            Portfolio
          </Link>
          <Link to="/contact" className="px-2">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Portfolio;
