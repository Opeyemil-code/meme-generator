import React from "react";
//import Image from "../image/image";
//import memesData from "../memesData/memesData";

  


export default function Button(params) {


  const [meme, setMeme]  = React.useState(
    {
        top : '',
        bottom : '',
        randomImage : 'http://i.imgflip.com/1bij.jpg'
    }
  )

  const [allMemeImages, setallMemesimages] = React.useState([]) 

  React.useEffect(()=> {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setallMemesimages(data.data.memes))
  }, [])


  function Input(event) {
     setMeme(
        (prev) => {
            return {
                ...prev, [event.target.name] : event.target.value
            }
        }
     )
  }


  function Prevent(event) {
    event.preventDefault()
  }

  
   
   function getMemeImage(params) {
        //const memesArray = allMemeImages.data.memes
        const random = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[random].url
        
       setMeme(
        (prevState) => {
            return{
                ...prevState,
                randomImage : url
            }
        }
       )
          
    } 

    return(
            <div className="text-center mt-">


      <form className="flex mx-auto lg:w-2/3 flex-col " onSubmit={Prevent}>

        <div className="flex flex-row ">

        <input  className="border border-black lg:px-20 lg:mx-auto lg:w-96 w-40 lg:ml-20 py-2 mt-8 rounded-lg flex ml-2"
        type="text"
        placeholder='first words'
        name='top'
        onChange={Input}
        value={meme.top}/>

        <input className="border border-black lg:px-20 mx-auto lg:w-96 lg:ml-20 lg:py-2 mt-8 rounded-lg flex w-40" 
        type="text" 
        placeholder='seconds words'
        name="bottom"
        onChange={Input}
        value={meme.bottom}/>

      </div>
   

     <button onClick={getMemeImage} className="bg-black w-11/12 mx-auto text-center py-2 text-white text-xl font-bolder font-mono mt-4" >Generate memes here</button>


    </form> 


   <div className="lg:w-2/3 mx-auto mt-10">


              <div className="absolute flex lg:ml-80 border text-center bg-white lg:left-96 lg:px-24 lg:py-2 text-xl lg:w-auto w-3/4 lg:mx-auto lg:w-auto  ml-12 mt-1 p-2 lg:p-8">
                <p className="text-md mx-auto text-center ">{meme.top}</p>
            </div>


            <div className="absolute flex lg:ml-80 border text-center text-xl bg-white lg:left-96 lg:px-24 lg:py-2 lg:bottom-48 w-3/4 mx-auto lg:w-auto bottom-28 ml-12 p-2">
                <p className="text-md mx-auto text-center">{meme.bottom}</p>
            </div>

            <img className="lg:w-full lg:h-96 w-11/12 h-96 mx-auto" alt="" src={meme.randomImage} />

        
          </div>


    </div>


    )
}

