import './App.css'
import '@picocss/pico'
import { useState } from 'react'
import Game from './components/Game'
import  Menu  from './components/Menu'

function App() {  

    const [gameMode, setGameMode] = useState("name");
    const [inMenu, setInMenu] = useState(true); 

    const leaveMenu = () => {
        setInMenu(false)
    }

    const leaveGame = () => {
        setInMenu(true)
    }


    if(inMenu){
        return(
            <div className='margin-top' align='center'>
                <Menu leave= {leaveMenu} setGame = {setGameMode}/>
            </div>
        )
    }

    return (
        <div className='margin-top' align='center'>
            <Game leave = {leaveGame} gameMode = {gameMode}/>
        </div>
    )
}

export default App
