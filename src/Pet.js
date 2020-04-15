import React from "react";

const Pet = ({ name, specie, breed }) => {
   /* return React.createElement("div", {}, [
        React.createElement("h2", {}, name),
        React.createElement("h2", {}, specie),
        React.createElement("h2", {}, breed),
    ]);*/
   return(
       <div>
          <h2>{name}</h2>
          <p>{specie}</p>
          <p>{breed}</p>
       </div>
   )

};
export default Pet;