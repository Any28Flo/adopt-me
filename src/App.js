//All your code goes here
/* The three parameters of .createElement methods parent
 1)What kind of element it is
 2)Children : Whatever children how was passed .All the attributes that you want to give to the component

 */
import React from 'react';
import { render } from 'react-dom';
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),

    React.createElement(Pet, {
      name: "Sasha",
      specie: "Dog",
      breed: "GreatDane",
    }),
    React.createElement(Pet, {
      name: "Munish",
      specie: "Cat",
      breed: "Mix",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      specie: "Bird",
      breed: "Cocktiel",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
