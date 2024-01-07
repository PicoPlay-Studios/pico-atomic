/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import SubTitle from "./SubTitle";
import Element from "./Element";
import Keyboard from "./Keyboard";
const elementName = [
    "Hydrogen","Helium","Lithium","Beryllium",
    "Boron","Carbon","Nitrogen","Oxygen",
    "Fluorine","Neon","Sodium","Magnesium",
    "Aluminum","Silicon","Phosphorus","Sulfur",
    "Chlorine","Argon","Potassium","Calcium",
    "Scandium","Titanium","Vanadium","Chromium",
    "Manganese","Iron","Cobalt","Nickel",
    "Copper","Zinc","Gallium","Germanium",
    "Arsenic","Selenium","Bromine","Krypton",
    "Rubidium","Strontium","Yttrium","Zirconium",
    "Niobium","Molybdenum","Technetium","Ruthenium",
    "Rhodium","Palladium","Silver","Cadmium",
    "Indium","Tin","Antimony","Tellurium",
    "Iodine","Xenon","Cesium","Barium",
    "Lanthanum","Cerium","Praseodymium","Neodymium",
    "Promethium","Samarium","Europium","Gadolinium",
    "Terbium","Dysprosium","Holmium","Erbium",
    "Thulium","Ytterbium","Lutetium","Hafnium",
    "Tantalum","Tungsten","Rhenium","Osmium",
    "Iridium","Platinum","Gold","Mercury",
    "Thallium","Lead","Bismuth","Polonium",
    "Astatine","Radon","Francium","Radium",
    "Actinium","Thorium","Protactinium","Uranium",
    "Neptunium","Plutonium","Americium","Curium",
    "Berkelium","Californium","Einsteinium","Fermium",
    "Mendelevium","Nobelium","Lawrencium","Rutherfordium",
    "Dubnium","Seaborgium","Bohrium","Hassium",
    "Meitnerium", "Darmstadtium", "Roentgenium", 
    "Copernicium", "Nihonium", "Flerovium", "Moscovium", 
    "Livermorium", "Tennessine", "Oganesson"
]

const elementSymbol = [
    "H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl",
    "Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As",
    "Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In",
    "Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb",
    "Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl",
    "Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk",
    "Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt", "Ds", "Rg", "Cn",
    "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
]

function MakeElement(){
    var index = Math.floor(Math.random() * 118)

    return (
        {name: elementName[index],symbol: elementSymbol[index], number: index + 1}
    )
}
function checkInput(element, input, gameMode){
    if(gameMode == "number"){
        return element[gameMode] == input*1
    }
    const elem = element[gameMode].toUpperCase();
    const inp = input.toUpperCase();

    return elem == inp;
}

function LeaveGame({leave}){

    return(<button onClick={leave}> Quit </button>)

}

export default function Game({leave, gameMode, subTitleContent}){

    const [userInput, setUserInput] = useState('')
    const [currentElement, setCurrentElement] = useState(MakeElement())
    const [score, setScore] = useState(0)
    const [errors, setErrors] = useState(0)
function handleKeyPress(key){

            if(key == 'Enter'){

                if(checkInput(currentElement,  userInput,gameMode)){
                    setCurrentElement(MakeElement())
                    setScore(score + 1)
                    setUserInput('')
                    setErrors(0)
                    return
                }
                setUserInput('')
                setErrors(errors+1)
                if(errors == 2){
                    setScore(0)
                    setErrors(0)
                    setCurrentElement(MakeElement())

                }
                return

            }
        

            //handle delete
            if(key == 'Backspace'){
                setUserInput((prevInput) => prevInput.slice(0,-1));
                return;
            }
            //ignore inputs that are not keys 
            if(key.length > 1){
                return;
            }
            //max length 14
            if(userInput.length > 13){
                return;
            }
			const newUserInput = userInput + key
            setUserInput(newUserInput);

}

useEffect(() => {
        function handleInput(e){
            handleKeyPress(e.key)
        }
        window.addEventListener('keydown', handleInput);


        return () => {
            window.removeEventListener('keydown', handleInput);
        }
    },[userInput,currentElement]);

return (
    <div className='margin-top' align='center'>
        <SubTitle content={subTitleContent}/>
        <SubTitle content={`Current Score: ${score} | Strikes: ${errors}`}/>
        <Element element={currentElement} gameMode = {gameMode}/>
        <SubTitle content={userInput==''? '-----' : userInput}/>
        <div className="grid">
        <Keyboard  editInput={handleKeyPress}/> 
        </div>
        <div className="margin-top">
            <LeaveGame leave={leave}/>
        </div>
    </div>
)

}
