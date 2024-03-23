import { Link } from "react-router-dom";

function Content() {
  return (
    <nav className="h-32 sticky grid grid-cols-3">
      <div>Brand</div>
      <div className="flex justify-center text-purple-950 font-light font-montserrat items-center">
        <Link to="/" className="px-2">
          Home
        </Link>
        <Link to="/portfolio" className="px-2">
          Portfolio
        </Link>
        <Link to="/content" className="px-2 border-b-2 border-purple-950">
          Content
        </Link>
      </div>
    </nav>
  );
}

export default Content;
