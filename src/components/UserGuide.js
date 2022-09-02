import React, { Component, useEffect, useState }  from 'react';

function UserGuide(){
    const [eg, setExample] = useState( );
    const [type, setTyper] = useState();

    useEffect(()=>{setExample("new x y  P[x branch {l1:x<m>, l2:x(2)}.zero] | Q[ y select l2.(y<a>).zero]");
setTyper("+{l1 :?Int, l2 :!Int∧?Bool}")}, [])
    return (
        <>
        <h1>User Guide</h1>
        <ol>
            <li>Enter the names of the processes in square brackets along with the input. Eg: {eg}</li>
            <li>Click on the Plus sign to add more process descriptions</li>
            <li>Click on the cross button to delete process description</li>
            <li>Enter the typing contexts like a:Int</li>
            <li>The session type's syntax for branching and select is </li>
        </ol>
        </>
    );
}
export default UserGuide;