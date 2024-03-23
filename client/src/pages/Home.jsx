import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav className="h-32 grid grid-cols-2">
        <div className="flex items-center text-lg ps-10 pt-3 font-bold text-black rounded-tr-lg">
          <span className="bg-black text-white pl-2 rounded-3xl w-9 p-1 mr-[0.05rem]">
            YK
          </span>
          rishna
        </div>
        <div className="flex justify-end text-purple-900 font-light font-montserrat items-center mr-14">
          <Link to="/" className="px-2 border-b-2 border-purple-800">
            Home
          </Link>
          <Link to="/portfolio" className="px-2">
            Portfolio
          </Link>
          <Link to="/content" className="px-2">
            Content
          </Link>
        </div>
      </nav>
      <div className="grid grid-cols-2">
        <div className="">Welcome</div>
        <div className="flex justify-center">
          <img
            className="h-[35rem] rounded-t-[6rem] rounded-b-xl"
            src="/main.avif"
          />
        </div>
      </div>

      <div className="mt-20 p-12 grid grid-cols-2 bg-purple-800 text-white">
        <div className="p-5 bg-purple-900 rounded-lg shadow-xl">
          <div className="text-3xl underline underline-offset-4">About Me</div>
          <div className="mt-3">
            Professionally connected with the web development industry. Problem
            solver, always interested to learn new things, loyal employee with
            high attention to detail.
            <br /> Seriously love designing, coding, reading, listening to music
            and playing video games. Interested in the entire frontend spectrum
            and working on ambitious projects with interesting people. Go
            teamwork !!
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-5 border-2 border-purple-900 bg-purple-900 rounded-lg shadow-xl">
            <img src="/mypic.jpg" className="h-48 rounded-lg" />
          </div>
        </div>
        <div className="col-span-2 rounded-lg bg-purple-900 mt-10 p-5 shadow-xl">
          <div className="text-3xl underline underline-offset-4">Skills</div>
          <div className="mt-8 grid grid-cols-6 gap-3 text-center">
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              HTML
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              CSS
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              JavaScript
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              Bootstrap
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              Tailwind
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              ReactJS
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              NodeJS
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              Express
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              MongoDB
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              Python
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              Figma
            </div>
            <div className="border-2 border-white p-3 rounded-lg hover:bg-purple-800">
              Blender
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
