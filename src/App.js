import {  useState } from "react";
import Counter from "./Components/Counter";
import InputExample from "./Components/InputExample";
import UseEffectTest from "./Components/UseEffectTest";

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet", "Murat"]);
  const [address, setAddress] = useState({title:"Istanbul", zip:34000});
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
      {isVisible && <UseEffectTest />}
      <br />
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Toogle Visible</button>
      <br />
      <br />

      <InputExample/>
        <Counter/>
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ahmet")}>Click</button>
      <button onClick={() => setAge(25)}>Click</button>
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends,"Ayşe"])}>Click</button>
    
        <h2>Address</h2>
        <div>
          {address.title} - {address.zip}
        </div>
        <button onClick={() => setAddress({title:"İzmir",zip:35000})}>Click</button>
        <button onClick={() => setAddress({...address,title:"İzmir"})}>Click</button>

    </div>
  );
}

export default App;
