import React, { useEffect, useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {


  const [form, setForm] = useState(initialFormValues);
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);

  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="fullname"></label>
          <input
            name="fullname"
            placeholder="Full Name"
            value={form.fullname}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <label htmlFor="phone_number"></label>
          <input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={onChangeInput}
          />
        </div>
        <div className="btn">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
