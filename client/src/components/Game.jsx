export default function Game(props){


        const generateRandomElement = () => Math.floor(Math.random() * 118)
    
        const [userInput, setUserInput] = useState('');
	    const [currentElementIndex, setCurrentElementIndex] = useState(generateRandomElement());
    
        const getCurrentElement = () => elementName[currentElementIndex];
        const getCurrentSymbol = () => elementSymbol[currentElementIndex];
        
        
    console.log("Index is " + currentElementIndex)
    console.log("Current element is " + getCurrentElement() + " " + currentElementIndex)
    console.log("Current element name is " + getCurrentSymbol() + " " + currentElementIndex)
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
            
            if (newUserInput.toUpperCase() === getCurrentSymbol().toUpperCase()){
                setCurrentElementIndex(generateRandomElement())
                setUserInput('')
    
            }
        }
        window.addEventListener('keydown', handleInput);


        return () => {
            window.removeEventListener('keydown', handleInput);
        }
    },[userInput, currentElementIndex]);


    return(
        <>
            <Title/>
            <Element element={getCurrentElement()}/>
            <Keyboard userInput={userInput}/>
        </>
    )
}
