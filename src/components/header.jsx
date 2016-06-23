import React from 'react';
import {browserHistory} from 'react-router';

export default class Header extends React.Component{

  render() {
    return(
      <div className="page_header">
        <div className="my_name">
          <h1>Tom Roper</h1>
          <h3>Front End Web Developer</h3>
        </div>
        <div className="social">
          <a href="https://github.com/tomroper/" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
          <a href="https://twitter.com/tom_roper" target="_blank"><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a>
          <a href="https://ca.linkedin.com/in/tomroperdev" target="_blank"><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></a>
        </div>  
      </div>
  );
  }
}