import React from "react";
import Card from "../components/card";
import { Link } from "react-router-dom";
function Notfound() {
  return (
    <>
      <Card bcolor="white" tcolor="brown" title="Not-Found😢" />
      <Link to="/" className="animated-underline">
        Hom page
      </Link>
    </>
  );
}

export default Notfound;
