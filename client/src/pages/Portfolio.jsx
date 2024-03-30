import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/portfolio.css";

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
        </div>
      </nav>
      <div className="bg-purple-800 text-white p-5">
        <div className="text-3xl ml-8 my-5 font-extrabold">3D-Renders</div>
        <div className="grid grid-cols-3 mx-8 gap-6 portfolio-images">
          <img className="rounded-lg" src="/upscale4.png" alt="render 1" />
          <img className="rounded-lg" src="/upscale2.png" alt="render 1" />
          <img className="rounded-lg" src="/upscale1.png" alt="render 1" />
          <img className="rounded-lg" src="/upscale1.1.png" alt="render 1" />
        </div>
        <div className="text-3xl ml-8 my-5 font-extrabold">Web Designs</div>
        <div className="grid grid-cols-3 gap-6 mx-8 portfolio-images">
          <img src="/blog.jpeg" className="rounded-lg h-52 w-[22rem]" />
        </div>
        <div className="text-3xl ml-8 my-5 font-extrabold">
          Web Dev Projects
        </div>
        <div className="grid grid-cols-3 gap-6 mx-8 portfolio-images">
          <Link to="/">
            <img src="/portfolio.jpeg" className="rounded-lg" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
