import React from 'react';


export default function Error({error}){
    return(
        <div style={{fontSize:12,color:"red"}}>
            {error}
        </div>
    );
}