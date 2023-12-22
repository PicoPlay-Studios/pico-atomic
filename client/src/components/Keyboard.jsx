import { useEffect, useState } from 'react'
export default function Keyboard(){

	const [userInput, setUserInput] = useState("");

	useEffect(() => {


		function handleInput(e){

			setUserInput(userInput.concat(e.target.value));
			console.log('key pressed');
		}
		window.addEventListener('keydown', handleInput);


		return () => {

			window.removeEventListener('keydown', handleInput);
		}
	},[]);

	return( 
		<div>
		{userInput}
		</div>
	)

}
