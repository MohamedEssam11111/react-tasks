import React, { useReducer } from "react";
const initialState = {
  name: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_name":
      return { ...state, name: action.payload };
    case "set_email":
      return { ...state, email: action.payload };
    case "set_password":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
  }
};
function FormWithUseReducer() {
  const [state, dispach] = useReducer(reducer, initialState);
  const handelSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = state;
    alert("Name: " + name + "\nEmail: " + email + "\nPassword: " + password);
  };
  return (
    <>
      {/* prettier-ignore */}
      <form onSubmit={handelSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={state.name} onChange={(e)=> dispach({type:"set_name" , payload:e.target.value})} placeholder="Enter your name"/>
        <hr />
        <label htmlFor="email">email</label>
        <input type="text" name="email" id="email" value={state.email} onChange={(e)=> dispach({type:"set_email" , payload:e.target.value})} placeholder="Enter your email"/>
        <hr />
        <label htmlFor="password">password</label>
        <input type="text" name="password" id="password" value={state.password} onChange={(e)=> dispach({type:"set_password" , payload:e.target.value})} placeholder="Enter your password"/>
        <hr />
        <button type="button"onClick={()=>dispach({type:"reset"})}>reset</button>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default FormWithUseReducer;
