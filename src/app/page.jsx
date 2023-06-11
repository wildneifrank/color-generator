"use client";
import { useState } from "react";

export default function Home() {
  const characters = "0123456789ABCDEF";
  const [color, setColor] = useState("#160736");
  function handleColorGenerator() {
    let random = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 16);
      random += characters[index];
    }
    setColor(random);
    console.log(color);
  }
  return (
    <main className="flex h-[100vh] bg-[#30156b] justify-between items-center flex-col">
      <nav className="h-20 w-full flex justify-between items-center">
        <div className="h-10 w-10 ml-32 text-lg text-white font-medium">
          Logo
        </div>
        <a
          href="https://github.com/wildneifrank/color-generator/tree/master"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-10 w-10 mr-56 text-lg text-white font-medium transition-all duration-700 hover:text-[#160736]">
            Github
          </div>
        </a>
      </nav>
      <div className="flex justify-evenly items-center w-full">
        <div
          className={` rounded-xl w-96 h-96 flex justify-center items-center shadow-xl`}
          style={{ backgroundColor: `${color}` }}
        >
          <div className="w-full h-14 bg-indigo-950 text-white text-lg font-semibold flex justify-center items-center">
            {color}
          </div>
        </div>
        <div className="bg-[#160736] rounded-xl w-96 h-96 flex justify-center items-center shadow-xl">
          <button
            className="w-1/2 h-14 py-2 px-5 bg-white text-[#160736] transition-all duration-700 rounded-2xl font-semibold text-lg hover:bg-[#160736] hover:text-white"
            onClick={() => {
              handleColorGenerator();
            }}
          >
            Generate Color
          </button>
        </div>
      </div>
      <div className="text-lg text-white mb-3">
        Developed by
        <a
          href="https://www.instagram.com/wildnei_frank/"
          target="_blank"
          className="transition-all duration-700 hover:text-[#160736]"
        >
          {" "}
          Wildnei Frank
        </a>
      </div>
    </main>
  );
}
