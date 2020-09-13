import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {API_ROOT} from "./const";
import {useHistory} from "react-router-dom";
import Flow from "./Flow"

import "./SearchResults.css";

function SearchResults(){
  let {keyword} = useParams();
  let {page} = useParams();
  const history = useHistory();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mark, setMark] = useState('☪')

  useEffect(()=>{
    setMark('☪');
    setLoading(true);
    fetch(API_ROOT+"/search?keyword="+keyword+"&page="+page).then(
        res => res.json()
      ).then(
        res => {
          //console.log(res);
          if (res['success']) {
            setResults(res['results']);
            setLoading(false);
          }
          else {
            console.log(res['error']);
            setMark('E');
          }
        }
      )
  }, [keyword, page]);

  function handleLeftpage() {
    var ipage = parseInt(page);
    if (ipage > 1) {
      history.push("/search/"+keyword+"/"+(ipage - 1).toString());
    }
  }

  function handleRightpage() {
    var ipage = parseInt(page);
    if (ipage < 10) {
      history.push("/search/"+keyword+"/"+(ipage + 1).toString());
    }
  }

  function render_current_page(x) {
    if (x === parseInt(page)) return (<span style={{color: 'black'}}> {x} </span>);
    else return (<span style={{color: 'blue'}}> {x} </span>);
  }

  if (loading) {
    return (
      <div className="loading"> {mark} </div>
    );
  }

  return (
      <div className="search-results">
        <Flow meta={results} />

        <div className='page-manager'>
          <span className='left-button' onClick={handleLeftpage}> ᐊ </span>
          <span className='jump' onClick={()=>{history.push("/search/"+keyword+"/1")}}> {render_current_page(1)} </span>
          <span className='jump' onClick={()=>{history.push("/search/"+keyword+"/2")}}> {render_current_page(2)} </span>
          <span className='jump' onClick={()=>{history.push("/search/"+keyword+"/3")}}> {render_current_page(3)} </span>
          <span className='jump' onClick={()=>{history.push("/search/"+keyword+"/4")}}> {render_current_page(4)} </span>
          <span className='jump' onClick={()=>{history.push("/search/"+keyword+"/5")}}> {render_current_page(5)} </span>
          <span className='jump' onClick={()=>{history.push("/search/"+keyword+"/6")}}> {render_current_page(6)} </span>
          <span className='jump' onClick={()=>{history.push("/search/"+keyword+"/7")}}> {render_current_page(7)} </span>
          <span className='jump' onClick={()=>{history.push("/search/"+keyword+"/8")}}> {render_current_page(8)} </span>
          <span className='jump' onClick={()=>{history.push("/search/"+keyword+"/9")}}> {render_current_page(9)} </span>
          <span className='jump' onClick={()=>{history.push("/search/"+keyword+"/10")}}> {render_current_page(10)} </span>
          <span className='right-button' onClick={handleRightpage}> ᐅ </span>
        </div>

      </div>
  );
}

export default SearchResults;