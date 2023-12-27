import { useEffect, useState } from 'react'
export default function Keyboard(){

	const [userInput, setUserInput] = useState('');

	useEffect(() => {
		function handleInput(e){
			if(e.key == 'Backspace'){

			let s = userInput;
			setUserInput(userInput => userInput.substring(0,s.length-1));
				return;
			}

            if(e.key.length > 1){
                return
            }

			setUserInput(userInput => userInput + e.key);
			console.log(userInput);
		}
		window.addEventListener('keydown', handleInput);


		return () => {
			window.removeEventListener('keydown', handleInput);
		}
	},[userInput]);

	return( 
		<h3>
		{userInput}
		</h3>
	)

}
