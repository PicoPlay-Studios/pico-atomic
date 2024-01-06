/* eslint-disable react/prop-types */

import Title from './Title'
import SubTitle from './SubTitle'


function GameSelectButton({leaveMenu, setGame, gameMode, handleMenuClick, text="undefine"}){
    return(
        <button onClick = { () => {
            setGame(gameMode);
            leaveMenu()
            handleMenuClick(text)
        }}>
        {text}
        </button>
    )

}
function Menu({leave, setGame, handleMenuClick}){


    return(

        <>
        <Title/>
        <SubTitle content = {"Menu"}/>
        <div className='grid'>
            <GameSelectButton leaveMenu = {leave} setGame={setGame} gameMode={"name"} text="Guess The Name" handleMenuClick={handleMenuClick}/>
            <GameSelectButton leaveMenu = {leave} setGame={setGame} gameMode={"number"} text="Guess The Number" handleMenuClick={handleMenuClick}/>
            <GameSelectButton leaveMenu = {leave} setGame={setGame} gameMode={"symbol"} text="Guess The Symbol" handleMenuClick={handleMenuClick}/>
        </div>
        </>

    )

}


export default Menu