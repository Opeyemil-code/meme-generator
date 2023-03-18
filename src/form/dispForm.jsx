import React from "react";

export default function Go(props) {
    
    return(
        <div className="w-2/3 mx-auto">
            <form className="flex ">
            <input  className="border border-black px-20 mx-auto w-96 ml-20 py-2 mt-8 rounded-lg flex" type="text" placeholder='first words'/>
            <input className="border border-black px-20 mx-auto w-96 ml-20 py-2 mt-8 rounded-lg flex" type="text" placeholder='seconds words'/>
           </form>  
        </div>

      
    )
}