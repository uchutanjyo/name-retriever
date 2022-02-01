import React, { useState } from "react";

const Name = ({id, name, prefix,removeName}) => {
    const [displayName, setDisplayName] = useState([false])
return (
    <>   
    <div className='name-box'>
   <div >Name: {prefix}
     {displayName ? name : 'NAME HIDDEN'}
     </div>
        <div className="id">ID#: {id}</div>
       <button onClick={()=> setDisplayName(!displayName)}>{displayName ? 'hide display name' : 'view dsiplay name'}</button>

       <button onClick={()=> removeName(id)}>delete this one</button>
</div>
    </>
)

}

export default Name;
