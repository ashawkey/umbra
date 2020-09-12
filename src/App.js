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
        <div className="header"> 
          <SearchBar/> 
        </div>
        <div className="content">
          <Switch>
            {/* Search page */}
            <Route path="/search/:keyword/:page">
              <SearchResults />
            </Route>
            {/* fallback */}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          
        </div>
        <ScrollToTop showUnder={160}>
          <span className='up-arrow'> ↑ </span>
        </ScrollToTop>
        <div className="footer"> 
          @ <a href='https://github.com/ashawkey'> hawkey </a>
        </div>
      </HashRouter>
    </div>
  );
}

function NoMatch() {
  return (
    <div className="no-match">  </div>
  );
}

export default App;