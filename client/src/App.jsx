/* eslint-disable react/no-unknown-property */
import './App.css'
import Title from './components/Title'
import Element from './components/Element'
import Keyboard from './components/Keyboard'
import '@picocss/pico'
import { useEffect, useState } from 'react'



const rNum = Math.floor(Math.random() * 120);

function App() {

    const [userInput, setUserInput] = useState('');
    //Insert key listener
    useEffect(() => {
        function handleInput(e){
            //handle delete
            if(e.key == 'Backspace'){
                let s = userInput;
                setUserInput(userInput => userInput.substring(0,s.length-1));
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
            setUserInput(userInput => userInput + e.key);
            console.log(userInput);
        }
        window.addEventListener('keydown', handleInput);


        return () => {
            window.removeEventListener('keydown', handleInput);
        }
    },[userInput]);





	return (
		<div className="margin-top" align="center">
		<Title/>
		<Element element={rNum}/>
		<Keyboard userInput={userInput}/>
		</div>
	)
}

export default App
