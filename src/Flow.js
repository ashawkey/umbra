import React from 'react';
import './Flow.css';


function Flow(props) {
  return (
    <div className="flow">
      {props.meta.map((value, index) => (
        <FlowItem value={value} key={index} />
      ))}
    </div>
  );
}

  
function FlowItem(props) {
  // props.value = {title:~, snippet:~, formattedUrl:~, ...}
  return (
    <div className="flow-item">
      <div className="url"> {props.value['formattedUrl']} </div>
      <a className="title" href={props.value['formattedUrl']}> {props.value['title']} </a>
      <div className="snippet"> {props.value['snippet']} </div>
    </div>
  );
}


export default Flow;