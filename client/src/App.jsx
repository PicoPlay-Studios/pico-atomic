/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
// This generates number between 0+1 and 117+1
const elementName = [
                     "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron",
                     "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
                     "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus",
                     "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
                     "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese",
                     "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
                     "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine",
                     "Krypton", "Rubidium", "Strontium", "Yttrium","Zirconium", 
                     "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium",
                     "Palladium", "Silver", "Cadmium", "Indium", "Tin",
                     "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium",
                     "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium",
                     "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium",
                     "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium",
                     "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", 
                     "Osmium", "Iridium", "Platinum", "Gold", "Mercury",
                     "Thallium", "Lead", "Bismuth", "Polonium", "Astatine",
                     "Radon", "Francium", "Radium", "Actinium", "Thorium",
                     "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium",
                     "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium",
                     "Mendelevium", "Nobelium", "Lawerencium", "Rutherforium","Dubnium",
                     "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium",
                     "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium",
                     "Livermorium", "Tennessine", "Oganesson"
                    ]; 

const elementSymbol = [
                        "H","He","Li","Be","B","C","N","O","F",
                        "Ne","Na","Mg","Al","Si","P","S","Cl",
                        "Ar","K","Ca","Sc","Ti","V","Cr","Mn",
                        "Fe","Co","Ni","Cu","Zn","Ga","Ge","As",
                        "Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo",
                        "Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb",
                        "Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd",
                        "Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er",
                        "Tm","Yb","Lu","Hf","Ta","W","Re","Os",
                        "Ir","Pt","Au","Hg","Tl","Pb","Bi",
                        "Po","At","Rn","Fr","Ra","Ac","Th",
                        "Pa","U","Np","Pu","Am","Cm","Bk","Cf",
                        "Es","Fm","Md","No","Lr","Rf","Db","Sg",
                        "Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl",
                        "Mc","Lv","Ts","Og"
                    ]

    function App() {  
    
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

	return (
		<div className="margin-top" align="center">
		<Title/>
		<Element element={getCurrentElement()}/>
		<Keyboard userInput={userInput}/>
		</div>
	)
}

export default App
