import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';
import Header from './header'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  
    }
  }

  render() {
  
    return (
      <div>
        <Header />
        <div className="construction">
          <h2>I'm still building...</h2>
          <p>But please get in touch</p>
          <p>Cell: (778) 772 6321</p>
          <p>Email: hello@tom-roper.com </p>
          <p>Tweet: @tom_roper</p>
        </div>
      </div>
    );


  } //render close
} //App close
