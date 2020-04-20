import React, {useState} from 'react';
import { render, useParams } from 'react-dom';
import {Router, Link} from "@reach/router"
import SearchParams from "./components/SearchParams";
import Details from "./components/Details"
import ThemeContext from "./components/ThemeContext";

const App = () => {
  const themeHook = useState('darkblue');
    let { id } = useParams()
  return(
      <ThemeContext.Provider value={themeHook}>
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
      </ThemeContext.Provider>
  )
};
render(<App/>, document.getElementById("root"));
