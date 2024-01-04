
import Title from './Title'
import SubTitle from './SubTitle'


function Button({handleClick, text="undefine"}){

    return(

        <button onClick = { () => {
            handleClick(true)
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
        <Button handleClick= {cbFunc} text="Play"/>
        </>

    )

}


export default Menu
