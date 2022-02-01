import React from "react";
import Name from './Name';

const Names = ({names, removeName}) => {
return (
    <>  
        <div className="names">Names</div> 

     <div className="names-box"> {names.map((name)=> {
        return (
       <>
       
        <Name key={name.id} {...name} removeName={removeName}/> 
        
        </> 
        )
    }) }</div>
    </>

)

}

export default Names;
