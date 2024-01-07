/* eslint-disable react/prop-types */
import BackspaceIcon from "../assets/backspace-svgrepo-com (1).svg"
import EnterIcon from "../assets/enter-svgrepo-com (2).svg"

function Key({ k, editInput, action, style }) {
  const classNameStyle =
    k !== "Backspace" && k !== "Enter" ? "keys" : "action-keys";

  return (
    <a
      className={classNameStyle}
      href="#"
      role="button"
      onClick={() => editInput(action)}
      style={style}
    >
      {k === "Backspace" ? (
        <img 
          style={{ width: "30px", height: "25px" }} 
          src={BackspaceIcon} 
          alt="Backspace" />
      ) : k === "Enter" ? (
          window.innerWidth < 497 ? (
          <img 
            style={{ width: "30px", height: "25px" }} 
            src={EnterIcon} 
            alt="Enter" />
          ) : (
            k
          )
      ) : (
        k
      )}
    </a>
  );
}
  
  function KeyRow({ editInput, keys }) {
    return (
      <div>
        {keys.map((k) => {
            const marginStyle = {
                marginLeft: k === "A" ? "1em" : "",
                marginRight: k === "L" ? "1em" : ""
            }
          return <Key style={marginStyle} key={k} editInput={editInput} action={k} k={k} />;
        })}
      </div>
    );
  }
  
  export default function Keyboard({ editInput }) {
   
    const keys = [ 
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Enter", "Z", "X", "C", "V", "B", "N", "M",
        "Backspace"
    ]

    return (
        <div>
            <KeyRow editInput={editInput} keys={keys}/>
        </div>
    )
  }