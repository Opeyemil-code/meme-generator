import React from "react";
import headerpics from '/img/Vector(29).svg'

export default function Header(params) {
    return(
        <header className="flex flex-row bg-purple-800 lg:w-2/3 mx-auto lg:p-6 space-x-12 p-2">
           <div className="flex flex-row lg:ml-20">
             <h3 className="text-white text-2xl font-bold font-serif lg:ml-4 ml-2">Meme Generator</h3>
           </div>

           <div className="text-xl text-white">
             <h1 className="lg:ml-72 lg:mt-0 ">opeyemil</h1>
           </div>

        </header>
    )
  }