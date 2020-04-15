import React from "react";

const Pet = ({ name, specie, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, name),
        React.createElement("h2", {}, specie),
        React.createElement("h2", {}, breed),
    ]);
};
export default Pet;