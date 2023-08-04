import React, { useEffect, useState } from "react";

function UseEffectTest() {
  const [name, setName] = useState("Mehmet");
  const [number, setNumber] = useState(0);

  /*
    useEffect(()=>{
        console.log("State Güncellendi!");
    });
    */
  useEffect(() => {
    console.log("Component mount edildi");
    
    
    const interval=setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);
    
   return ()=>{
    console.log("Unmount oldu");
    clearInterval(interval);
   }
  }, []);

  /*
    useEffect(() => {
        console.log("Number state değişti");
    },[number]);
    */

  return (
    <>
      <div>UseEffectTest</div>
      <h1>{name}</h1>
      <button onClick={() => setName(name + "1")}>İsmi değiştir</button>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Numarayı değiştir</button>
    </>
  );
}

export default UseEffectTest;
