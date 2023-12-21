
function Element() {
	let rNum = Math.floor(Math.random() * 120);
    return(
        <div class="container-fluid"><h2 class="container-fluid">{rNum}</h2></div>
    )
}

export default Element;
