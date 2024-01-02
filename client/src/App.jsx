/* eslint-disable react/no-unknown-property */
import './App.css'
import Title from './components/Title'
import Element from './components/Element'
import Keyboard from './components/Keyboard'
import '@picocss/pico'
import { useEffect, useState } from 'react'

// const rNum = Math.floor(Math.random() * 120);
// made it into a function
// will rework this later so the character matches the number
const generateRandomElement = () => Math.floor(Math.random() * 120)
function App() {

    const [userInput, setUserInput] = useState('');
	const [currentElement, setCurrentElement] = useState(generateRandomElement());
    //Insert key listener
    useEffect(() => {
        function handleInput(e){
            //handle delete
            if(e.key == 'Backspace'){
                setUserInput((prevInput) => prevInput.slice(0,-1));
                return;
            }
            //ignore inputs that are not keys 
            if(e.key.length > 1){
                return;
            }
            //max length 14
            if(userInput.length > 13){
                return;
            }
			const newUserInput = userInput + e.key
            setUserInput(newUserInput);
            // console.log(userInput);

			//check if userInput matches the current element
			if(parseInt(newUserInput, 10) === currentElement){
				setCurrentElement(generateRandomElement)
				setUserInput('')
			}
        }
        window.addEventListener('keydown', handleInput);


        return () => {
            window.removeEventListener('keydown', handleInput);
        }
    },[userInput, currentElement]);

	return (
		<div className="margin-top" align="center">
		<Title/>
		<Element element={currentElement}/>
		<Keyboard userInput={userInput}/>
		</div>
	)
}

export default App
