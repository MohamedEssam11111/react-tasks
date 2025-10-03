import React from "react";
import Card from "../components/card";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Card bcolor="green" tcolor="blue" title="About" />
      <Link to="/" className="animated-underline">
        Hom page
      </Link>
    </>
  );
}

export default About;
