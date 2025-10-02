import { useState } from "react";
import Card from "./card";

const Aauth = () => {
  const [login, setlogin] = useState(false);

  return (
    <>
      {login && <button style={{ margin: "20px" }}>login</button>}
      {login ? <Card title={"Welcome"} /> : <Card title={"login"} />}
      <button onClick={() => setlogin(!login)}>change</button>
    </>
  );
};

export default Aauth;
