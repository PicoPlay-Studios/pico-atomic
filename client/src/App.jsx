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
    const [subTitleContent, setSubTitleContent] = useState("Menu");

    const handleMenuClick = (newContent) => {
        setInMenu(false);
        setSubTitleContent(newContent);
    }

    return (
        <div className='margin-top' align='center'>
            {inMenu ? (
                <Menu cbFunc={handleMenuClick}/>
            ) : (
                <Game subTitleContent={subTitleContent}/>
            )}
        </div>
    )
}

export default App
