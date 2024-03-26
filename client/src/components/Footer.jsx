import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-center items-center h-48 gap-3">
      <Link to="https://wa.link/587w7o">
        <img src="/whatsapp.png" className="w-7 h-7" />
      </Link>
      <a href="mailto:yedhukrishnagk@gmail.com" target="_blank">
        <img src="/gmail.png" className="w-7 h-7" />
      </a>

      <img src="/linkedin.png" className="w-7 h-7" />
      <img src="/github.png" className="w-7 h-7" />
    </div>
  );
}

export default Footer;
