/** @AnonSYS23 */

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Present.css"

export default function Present() {
  const info = [
    {
      name: "Jose",
      description: "Depende",
      base: "base",
      p: "p",
      hr: "h",
      p2: "p",
    },
    {
      name: "Andres",
      description: "Si",
      base: "base1",
      p: "p1",
      hr: "h1",
      p2: "p2",
    }
  ];

  return (
    <>
      {info.map((i, index) => (
        <div key={index} className="base base1">
          <p className="i.p"> Hello </p>
          <hr className="i.hr"/>
          <p className="i.p2"> My name is {i.name} </p>
        </div>
      ))}
    </>
  );
}