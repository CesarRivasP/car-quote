import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Result extends Component {
  render(){
    const { result } = this.props;
    return (
      <div className="gran-total">
        <TransitionGroup component="span" className="result">
          <CSSTransition className="result" key={result} timeout={{ enter: 500, exit: 500 }}>
            <span><strong>{ result }</strong></span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default Result;
