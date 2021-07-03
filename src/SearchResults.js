import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {API_ROOT} from "./const";
import {useHistory} from "react-router-dom";
import Flow from "./Flow"

import "./SearchResults.css";
import { Paper } from '@material-ui/core';

function SearchResults(){
  let {keyword} = useParams();
  let {page} = useParams();
  const history = useHistory();
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(()=>{
    setStatus('loading');
    // parse keyword
    if (keyword.startsWith('yhdm:')) {
      fetch(API_ROOT+"/yhdm?keyword="+keyword.substr(5)).then(
        res => res.json()
      ).then(
        res => {
          //console.log(res);
          if (res['success']) {
            setResults(res['results']);
            setStatus('ready_yhdm');
          }
          else {
            console.log(res['error']);
            setStatus('error');
          }
        }
      ).catch(
        () => {
          setStatus('error');
        }
      )
    } else {
      fetch(API_ROOT+"/google?keyword="+keyword+"&page="+page).then(
          res => res.json()
        ).then(
          res => {
            //console.log(res);
            if (res['success']) {
              setResults(res['results']);
              setStatus('ready_google');
            }
            else {
              console.log(res['error']);
              setStatus('error');
            }
          }
        ).catch(
          () => {
            setStatus('error');
          }
        )
    }
  }, [keyword, page]);

  function handleLeftpage() {
    var ipage = parseInt(page);
    if (ipage > 1) {
      history.push("/google/"+keyword+"/"+(ipage - 1).toString());
    }
  }

  function handleRightpage() {
    var ipage = parseInt(page);
    if (ipage < 10) {
      history.push("/google/"+keyword+"/"+(ipage + 1).toString());
    }
  }

  
  if (status === "loading") {
    return (
      <div className="loading"> 🌑 </div>
      );
    } else if (status === "error") {
      return (
        <Paper className="paper"> Error </Paper>
        );
      }
      
  function render_current_page(x) {
    if (x === parseInt(page)) return (<span style={{color: 'black'}}> {x} </span>);
    else return (<span style={{color: 'blue'}}> {x} </span>);
  }

  function render_page_manager() {
    return (
      <div className='page-manager'>
          <span className='left-button' onClick={handleLeftpage}> &lt; </span>
          <span className='jump' onClick={()=>{history.push("/google/"+keyword+"/1")}}> {render_current_page(1)} </span>
          <span className='jump' onClick={()=>{history.push("/google/"+keyword+"/2")}}> {render_current_page(2)} </span>
          <span className='jump' onClick={()=>{history.push("/google/"+keyword+"/3")}}> {render_current_page(3)} </span>
          <span className='jump' onClick={()=>{history.push("/google/"+keyword+"/4")}}> {render_current_page(4)} </span>
          <span className='jump' onClick={()=>{history.push("/google/"+keyword+"/5")}}> {render_current_page(5)} </span>
          <span className='jump' onClick={()=>{history.push("/google/"+keyword+"/6")}}> {render_current_page(6)} </span>
          <span className='jump' onClick={()=>{history.push("/google/"+keyword+"/7")}}> {render_current_page(7)} </span>
          <span className='jump' onClick={()=>{history.push("/google/"+keyword+"/8")}}> {render_current_page(8)} </span>
          <span className='jump' onClick={()=>{history.push("/google/"+keyword+"/9")}}> {render_current_page(9)} </span>
          <span className='jump' onClick={()=>{history.push("/google/"+keyword+"/10")}}> {render_current_page(10)} </span>
          <span className='right-button' onClick={handleRightpage}> &gt; </span>
        </div>
    );
  }

  return (
      <Paper className="paper">
        <Flow meta={results}/>
        {status === "ready_google" ? render_page_manager() : <div/>}
      </Paper>
  );
}

export default SearchResults;