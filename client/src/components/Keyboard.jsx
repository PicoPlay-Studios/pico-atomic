import { useEffect, useRef, useState } from 'react'
export default function(){

	const [userInput, setUserInput] = useState('');

	useEffect(() => {


		function handleInput(e){
			if(e.key == 'Backspace'){

			let s = userInput;
			setUserInput(userInput => userInput.substring(0,s.length));
				return;
			}

			setUserInput(userInput => userInput + e.key);
			console.log(userInput);
				
		};
		window.addEventListener('keydown', handleInput);


		return () => {

			window.removeEventListener('keydown', handleInput);
		}
	},[]);

	return( 
		<h3>
		{userInput}
		</h3>
	)

}
