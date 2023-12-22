import { useEffect, useRef, useState } from 'react'
export default function(){

	const [userInput, setUserInput] = useState("");

	function handleInput(e){

		setUserInput(userInput.concat(e.target.value));
		console.log('key pressed');
	};
	return( 
		<div onKeyDown={handleInput} tabIndex="0">
		{userInput}
		</div>
	)

}
