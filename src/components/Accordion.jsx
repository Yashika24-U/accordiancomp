import React, { useState } from "react";
import Myaccordian from "../components/Myaccordian";
import { questions } from "./data";
import "./Accordian.css";

const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h2>React Interview Questions</h2>
        {data.map((value, index) => {
          return <Myaccordian key={value.id} {...value} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
