/* eslint-disable react/prop-types */

function Element({element}) {
    return(
        <div>
            <h3>{element.symbol}</h3>
            <h3>{element.number}</h3>
        </div>
    )
}

export default Element;
