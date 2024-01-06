/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";


function ElementComponent({component}){
    <span>{`${component}`}</span>
}

function Element({element, gameMode}) {

    const [elementString, setElementString] = useState('');

    useEffect(() => {
        
        console.log(element);
        if(gameMode=="name"){
            setElementString(`${element["symbol"]} | ${element["number"]}`);
        }

        else if(gameMode=="symbol"){
            setElementString(`${element["name"]} | ${element["number"]}`);
        }

        else if(gameMode=="number"){
            setElementString(`${element["symbol"]} | ${element["name"]}`);
        }

    },[element])


    return(
        <div>
            <h3>{elementString}</h3>
        </div>
    )
}

export default Element;
