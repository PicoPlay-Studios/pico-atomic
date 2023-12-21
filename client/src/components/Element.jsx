
function Element() {
	let rNum = Math.floor(Math.random() * 120);
    return(
        <div className="container-fluid"><h2 className="container-fluid">{rNum}</h2></div>
    )
}

export default Element;
