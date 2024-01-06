/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import './App.css'
import '@picocss/pico'
import { useState } from 'react'
import Game from './components/Game'
import  Menu  from './components/Menu'

function App() {  

    const [gameMode, setGameMode] = useState("name");
    const [inMenu, setInMenu] = useState(true); 
    const [subTitleContent, setSubTitleContent] = useState("Menu");

    const leaveMenu = () => {
        setInMenu(false)
    }

    const leaveGame = () => {
        setInMenu(true)
    }


    const handleMenuClick = (newContent) => {
        setInMenu(false);
        setSubTitleContent(newContent);
    }

    return (
        <div className='margin-top' align='center'>
            {inMenu ? (
                <Menu leave={leaveMenu} setGame={setGameMode} handleMenuClick={handleMenuClick}/>
            ) : (
                <Game leave = {leaveGame} gameMode = {gameMode} subTitleContent={subTitleContent}/>
            )}
        </div>
    )
}

export default App