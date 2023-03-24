import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './header/header'
import Go from './form/dispForm'
import './App.css'
import Button from './button/button'
/*import Image from './image/image'*/
import Form from './form/dispForm'
export default function App(params) {
    return(
        <div>
          <Header />
          <Go />
          <Button />
         
        </div>
        
    )
}
