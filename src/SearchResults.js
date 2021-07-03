import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {API_ROOT} from "./const";
import {useHistory} from "react-router-dom";
import Flow from "./Flow"

import "./SearchResults.css";
import { Paper } from '@material-ui/core';

import franc from 'franc';

const lng_to_code = {
  'eng': 'en_US',
  'jpn': 'ja',
  'cmn': 'ja', // well, I don't search for chinese, so it is mostly japanese.
  'und': 'en_US', // undetermined --> default English
}

function SearchResults(){
  let {domain} = useParams();
  let {keyword} = useParams();
  let {page} = useParams();
  const history = useHistory();
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(()=>{
    setStatus('loading');
    // parse keyword
    if (domain === "yhdm") {
      fetch(API_ROOT+"/yhdm?keyword="+keyword).then(
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
    } else if (domain === "dict") {
      let lng_code = "en_US"; // default mode is English
      let lng = franc(keyword, {minLength: 1});
      if (lng in lng_to_code) {
        lng_code = lng_to_code[lng];
      } 

      fetch("https://api.dictionaryapi.dev/api/v2/entries/"+lng_code+"/"+keyword).then(
        res => res.json()
      ).then(
        res => {
          //console.log(lng, lng_code, keyword, res);
          if ('title' in res) {
            setResults([]);
          } else {
            setResults(res);
          }
          setStatus("ready_dict");
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
  }, [keyword, page, domain]);

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
      
  function render_current_page(x) {
    if (x === parseInt(page)) return (<span style={{color: 'black'}}> {x} </span>);
    else return (<span style={{color: 'blue'}}> {x} </span>);
  }

  function render_google_results() {
    return (
      <Paper>
        <Flow meta={results}/>
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
      </Paper>
    );  
  }

  function render_yhdm_results() {
    return (
      <Paper>
        <Flow meta={results}/>
      </Paper>
    );
  }

  function render_dict_results() {
    return (
      <Paper>
        <div className="flow">
          {results.map((value) => (
           <div className="flow-item" style={{margin: "5px"}}>
             <span style={{fontSize: "20px", fontWeight: "bold", color: "#000000"}}> {value['word']} </span>
             {value['meanings'].map((meaning) => (
               <div>
                 <span style={{fontSize: "15px", color: "#5e5e5e"}}> {meaning['partOfSpeech']} </span>
                 {meaning['definitions'].map((definition) => (
                   <div>  
                     * <span style={{fontSize: "15px", color: "#000000"}}> {definition['definition']} </span> <br/>
                     {'example' in definition && (<div style={{fontSize: "15px", color: "#3488d6"}}> e.g.: {definition['example']} <br/> </div>)} 
                     {'synonyms' in definition && definition['synonyms'].length > 0 && (<div style={{fontSize: "15px", color: "#9302a7"}}> syn.: {definition['synonyms'].join(', ')} <br/> </div>)}
                   </div>
                 ))}
               </div>
             ))}
           </div> 
          ))}
        </div>
      </Paper>
    );
  }

  if (status === "loading") {
    return (<div className="loading"> 🌑 </div>);
  } else if (status === "error") {
    return (<Paper className="paper"> Error </Paper>);
  } else if (status === "ready_google") {
    return render_google_results();
  } else if (status === "ready_yhdm") {
    return render_yhdm_results();
  } else if (status === "ready_dict") {
    return render_dict_results();
  } else {
    return (<Paper className="paper"> Wrong Status </Paper>);
  }
}

export default SearchResults;