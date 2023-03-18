import React from "react";
import Image from "../image/image";

export default function Button(params) {
   function getMEmeImage(params) {
       console.log('i was click')
   }

    return(
            <div className="text-center mt-6">
                <button onClick={getMEmeImage}  className="bg-purple-800 w-2/3 mx-auto text-center py-2 text-white text-xl font-bolder font-mono">Get a new Meme image</button>
            </div>
        
    )
}