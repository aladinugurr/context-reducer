import React, { useContext, useState } from "react";
import { UserContext } from "../context/context";

const Form = () => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    age: 0,
    isCompleted: false,
  });
  const { dispatch } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_USER", payload: user });
    setUser({ name: "", age: 0, isCompleted: false });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={user.name}
        type="text"
        name="name"
        onChange={handleChange}
      />
      <input value={user.age} type="text" name="age" onChange={handleChange} />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
