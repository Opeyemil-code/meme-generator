import React from "react";
//import Image from "../image/image";
import memesData from "../memesData/memesData";


export default function Button(params) {
    
   const [memeImage, setmemeImage] = React.useState('')
   
   function getMemeImage(params) {
        const memesArray = memesData.data.memes
        const random = Math.floor(Math.random() * memesArray.length)
    
       setmemeImage(memesArray[random].url)
       
    } 

    return(
            <div className="text-center mt-6">
                <button onClick={getMemeImage} className="bg-purple-800 w-2/3 mx-auto text-center py-2 text-white text-xl font-bolder font-mono">Generate memes here</button>


                <div className="w-2/3 mx-auto mt-10">
            <div className="absolute flex ml-80 border text-center bg-white left-96 px-24 py-2 text-2xl mt-4">
                <h2>opeyemi</h2>
            </div>


            <div className="absolute flex ml-80 border text-center bg-white left-96 px-24 py-2 text-2xl bottom-48">
                <h2>opeyemi</h2>
            </div>

            <img className="w-full h-96" src={memeImage} alt="" />

        
        </div>


            </div>
    )
}
