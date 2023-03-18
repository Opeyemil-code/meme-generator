import React from "react";
import headerpics from '/img/Vector(29).svg'

export default function Header(params) {
    return(
        <header className="flex flex-row bg-purple-800 w-2/3 mx-auto p-6 space-x-12">
           <div className="flex flex-row ml-20">
             <img src={headerpics} alt="" />
             <h3 className="text-white text-2xl font-bold font-serif">Meme Generator</h3>
           </div>

           <div className="text-xl text-white">
             <h1 className="ml-72">React Course - project 3</h1>
           </div>

        </header>
    )
}