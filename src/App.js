import React from 'react';
import {Switch, Route, HashRouter} from "react-router-dom";
import ScrollToTop from 'react-scroll-up';
import './App.css';

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {/* Search page */}
          <Route path="/:domain/:keyword/:page?">
            <div className="searchbar topped"> <SearchBar/> </div>
            <div className="searchres"> <SearchResults/> </div>
          </Route>
          {/* fallback */}
          <Route path="*">
          <div className="searchbar centered"> <SearchBar/> </div>
          </Route>
        </Switch>  
        <ScrollToTop showUnder={160}>
          <span className='up-arrow'> ↑ </span>
        </ScrollToTop>
      </HashRouter>
    </div>
  );
}

export default App;