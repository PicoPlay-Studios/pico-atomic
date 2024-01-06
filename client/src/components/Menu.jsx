/* eslint-disable react/prop-types */

import Title from './Title'
import SubTitle from './SubTitle'


function Button({handleClick, setGameMode, text="undefine"}){

    return(

        <button onClick = { () => {
            handleClick(text)
        }}>
        {text}
        </button>

    )

}
function Menu({cbFunc}){


    return(

        <>
        <Title/>
        <SubTitle content = {"Menu"}/>
        <Button handleClick= {cbFunc} text="Guess The Name"/>
        <Button handleClick= {cbFunc} text="Guess The Number"/>
        <Button handleClick= {cbFunc} text="Guess The Symbol"/>
        </>

    )

}


export default Menu
