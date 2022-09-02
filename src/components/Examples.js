import React, { Component, useEffect, useState }  from 'react';
function Examples(){
    const [input, setInput] = useState();
    const [p, setP] = useState();
    const[q, setQ] = useState();

    useEffect(() => {setInput("new x y  P[x branch {l1:x<m>, l2:x(2)}.zero] | Q[ y select l2.(y<a>).zero]");
    setP("Session type of P: &{l1:!Int, l2:?Int}.end\t Typint context: m:Int");
    setQ("Session type of Q: +{l1:?Int, l2:!Int}.end\t Typing context: a:Int")

}, [])
    return(
        <>
        <h1>Examples and resources</h1>
        <a href="http://www.dcs.gla.ac.uk/~ornela/publications/DGS17.pdf"> Click here to read on session types</a>
        <p>An example to try:</p>
        <p>Input: {input}</p> 
        <p>: {p}</p>
        <p>: {q}</p>
        </>
    );
}
export default Examples;