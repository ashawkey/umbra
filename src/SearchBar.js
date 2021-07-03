import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './SearchBar.css';

import TextField from '@material-ui/core/TextField';


function SearchBar() {
  // history must be inside router. This component has to be extracted out to work!
  const history = useHistory();
  const [keyword, setKeyword] = useState('');

  function handleChange(event) {
    setKeyword(event.target.value); // here event.target is <input>
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (keyword !== '') {
      history.push("/search/"+keyword+"/1");
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
