import React from 'react';
import { render } from 'react-dom';
import {Router, Link} from "@reach/router"
import SearchParams from "./components/SearchParams";
import Details from "./components/Details"
const App = () => {

  return(
      <div>
          <Link to="/">
              <header>
                  Adopt Me!
              </header>
          </Link>

          <Router>
              <SearchParams path="/" />
              <Details path="/details/:id"/>
          </Router>
      </div>
  )
};
render(<App/>, document.getElementById("root"));
