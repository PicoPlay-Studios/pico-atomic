/* eslint-disable react/prop-types */
   
function Key({editInput, action}){

    const buttonStyle = {

        fontSize: 11 + "px",
        marginTop: 4 + "px",
        marginLeft: 1 + "px"
    }

    return(

        <a style={buttonStyle} href="#" role="button" onClick={

            ()=>editInput(action)

        }>{action}</a>

    )
}

function KeyRow({editInput, keys}){

    return(
        <div>
        {
            keys.map((k) => {
                return <Key editInput={editInput} action={k}/>
            })
        }
        </div>
    )

}



export default function Keyboard({editInput}){
    
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    const keys4 = ["Backspace", "Enter"]

	return( 
        <div >
            <KeyRow editInput={editInput} keys={keys1}/>
            <KeyRow editInput={editInput} keys={keys2}/>
            <KeyRow editInput={editInput} keys={keys3}/>
            <br/>
            <KeyRow editInput={editInput} keys={keys4}/>
            <br/>
        </div>
	)

}
