import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './SearchBar.css';

import TextField from '@material-ui/core/TextField';


function SearchBar() {
  // history must be inside router. This component has to be extracted out to work!
  const history = useHistory();

  function extract_keyword(pathname) {
    let xs = pathname.split("/");
    if (xs.length === 2) {
      return xs[1];
    }
    else {
      return xs[2];
    }
  }

  const [keyword, setKeyword] = useState(extract_keyword(history.location.pathname));

  function handleChange(event) {
    setKeyword(event.target.value); // here event.target is <input>
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (keyword !== '') {
      // parse keyword
      if (keyword.startsWith('yhdm:') && (keyword.length > 5)) {
        history.push("/yhdm/"+keyword);
      } else {
        history.push("/google/"+keyword+"/1");
      }
    }
    else {
      history.push("/");
    }
  }

  return (
    <form autoComplete="on" onSubmit={handleSubmit}>
      <TextField id="searchbar" label="umbra" margin="dense"
        value={keyword}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
    </form>
  )
}

export default SearchBar;
