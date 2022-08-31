import React, { Component, useEffect, useState }  from 'react';

function UserGuide(){
    const [eg, setExample] = useState( );

    useEffect(()=>{setExample("new x y  P[x branch {l1:x<m>, l2:x(2)}.zero] | Q[ y select l2.(y<a>).zero]")}, [])
    return (
        <>
        <h1>User Guide</h1>
        <ol>
            <li>Enter the names of the processes in square brackets along with the input. Eg: {eg}</li>
        </ol>
        </>
    );
}
export default UserGuide;