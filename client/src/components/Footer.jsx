import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-center items-center h-48 gap-3">
      <Link to="https://wa.link/587w7o" target="_blank">
        <img src="/whatsapp.png" className="w-7 h-7" />
      </Link>
      <a href="mailto:yedhukrishnagk@gmail.com" target="_blank">
        <img src="/gmail.png" className="w-7 h-7" />
      </a>
      <a
        href="https://www.linkedin.com/in/yedhukrishna-ks-284502267/"
        target="_blank"
      >
        <img src="/linkedin.png" className="w-7 h-7" />
      </a>

      <a href="https://github.com/YedhuKrishna01" target="_blank">
        <img src="/github.png" className="w-7 h-7" />
      </a>
    </div>
  );
}

export default Footer;
