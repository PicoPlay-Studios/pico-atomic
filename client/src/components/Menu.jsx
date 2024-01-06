/* eslint-disable react/prop-types */

import Title from './Title'
import SubTitle from './SubTitle'


function GameSelectButton({leaveMenu, setGame, gameMode, text="undefine"}){

    return(

        <button onClick = { () => {
            setGame(gameMode);
            leaveMenu()
        }}>
        {text}
        </button>

    )

}
function Menu({leave, setGame}){


    return(

        <>
        <Title/>
        <SubTitle content = {"Menu"}/>
        <div className='grid'>
            <GameSelectButton leaveMenu = {leave} setGame={setGame} gameMode={"name"} text="Guess The Name"/>
            <GameSelectButton leaveMenu = {leave} setGame={setGame} gameMode={"number"} text="Guess The Number"/>
            <GameSelectButton leaveMenu = {leave} setGame={setGame} gameMode={"symbol"} text="Guess The Symbol"/>
        </div>
        </>

    )

}


export default Menu
