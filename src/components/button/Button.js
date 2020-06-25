const { useState } = require("react");

 function Button(){
    const {counter,setCounter} = useState(0);
    const handleClick = ()=> setCounter(counter+1);
    return(
        <button onClick={handleClick}>{counter}</button>
    )
}

export default Button;