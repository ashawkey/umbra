import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './SearchBar.css';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function SearchBar() {
  // history must be inside router. This component has to be extracted out to work!
  const history = useHistory();

  function extract_keyword(pathname) {
    if (pathname === "/") return "";
    else return pathname.split("/")[2];
  }

  function extract_domain(pathname) {
    if (pathname === "/") return "google";
    else return pathname.split("/")[1];
  }

  const [keyword, setKeyword] = useState(extract_keyword(history.location.pathname));
  const [domain, setDomain] = useState(extract_domain(history.location.pathname));

  function handleChange(event) {
    setKeyword(event.target.value); // here event.target is <input>
  }

  function handleChangeDomain(event) {
    setDomain(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (keyword !== '') {
      if (domain === "yhdm") {
        history.push("/yhdm/"+keyword);
      } else if (domain === "dict") {
        history.push("/dict/"+keyword);
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
        <FormControl variant="outlined" margin="dense" style={{margin: "auto 5px"}}>
          <InputLabel htmlFor="domain"> Domain </InputLabel>
          <Select native value={domain} onChange={handleChangeDomain} autoWidth label="domain" inputProps={{ name: 'domain', id: 'domain'}}>
            <option value={"google"}> Google </option>
            <option value={"dict"}> Dictionary </option>
            <option value={"yhdm"}> YHDM </option>
          </Select>
        </FormControl>
        <TextField id="searchbar" label="umbra" margin="dense" style={{margin: "auto 5px"}}
          value={keyword}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />
      </form>
  )
}

export default SearchBar;
