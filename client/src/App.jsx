/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import './App.css'
import '@picocss/pico'
import { useState } from 'react'
import Game from './components/Game'
import  Menu  from './components/Menu'

function App() {  

    const [inMenu, setInMenu] = useState(true); 

    //Temporary
    const goBack = () =>{
        setInMenu(true)
    }

    if(inMenu){
        return(
            <div className='margin-top' align='center'>
                <Menu cbFunc= {setInMenu}/>
            </div>
        )
    }

    return (
        <div className='margin-top' align='center'>
            <Game />
        </div>
    )
}

export default App
