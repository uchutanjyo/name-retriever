import './App.css';
import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import Names from './Names';



function App () {
 const url = ('https://random-data-api.com/api/name/random_name?size=4');

 const removeName = (id) => {
    const newNames = names.filter((name)=> name.id!=id)
    setNames(newNames)
  }
const [loading,setLoading] = useState(true);
  const [names, setNames] = useState([]);
const getNames = async () => {
  try
  {
  const response = await fetch(url);
   const names = await response.json();
     console.log(names)
              setNames(names);
         setLoading(false);
console.log(names)
} catch(error) {
      setLoading(false);
console.log(error)
}
}

useEffect(() => {getNames()}, [])
  if (loading) {
   return <Loading />;
  }
if (names.length === 0) {
  alert ('no names left')

  return (
<>
<h2>you didn't like any of those names?</h2>
<button onClick={()=> {getNames()}}> GET MORE NAMES</button>
</>
  )
}
  return (
    <>
<Names names={names} removeName={removeName}/>
      </>
  );
}

export default App;
