import React from "react";

const Pet = ({ name, specie, breed }) => {
   return(
       <div>
          <h2>{name}</h2>
          <p>{specie}</p>
          <p>{breed}</p>
       </div>
   )

};
export default Pet;