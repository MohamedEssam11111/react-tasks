import { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleControl = (e) => {
    e.preventDefault();
    alert("Welcome: " + name + " Email: " + email);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleControl}>
      <label htmlFor="name">Enter your name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="email">Enter your email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};
export default Controlled;
