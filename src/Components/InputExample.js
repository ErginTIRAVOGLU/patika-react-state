import React, { useState } from 'react'

function InputExample() {
    const [name,setName] = useState("");
    const [surName,setSurName] = useState("");
    const [form,setForm] = useState({name:"",surname:""});
    
    const onChangeName=(event) => setName(event.target.value)

    const onChangeInput=(e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
  return (
    <div>InputExample<br />
        Please enter a name<br />
        <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input><br />
        <input type='text' value={name} onChange={onChangeName}></input><br />
        <input type='text' value={surName} onChange={(event) => setSurName(event.target.value)}></input>
        <br />
        <br />
        <label for="name">Name : </label>
        <input type='text' name="name" value={form.name} onChange={onChangeInput}></input>
        <br />
        <label for="name">Surname : </label>
        <input type='text' name="surName" value={form.surName} onChange={onChangeInput}></input>

        <p>{form.name}</p>
        <p>{form.surName}</p>
    </div>
  )
}

export default InputExample