import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getJoke } from '../actions';

const Joke = props => {
  return (
    <div className="main-container">
      <h1>Chuck Norris Facts </h1>
      { !props.joke && !props.isFetching && <p>School is in session... </p> }
      { props.isFetching && (
        <Loader type="Audio" color="darkred" height={ 250 } width={ 250 } timeout={ 5000 } />
      ) }
      { props.joke && <p>{ props.joke.joke }</p> }
      <button onClick={ props.getJoke }>Click if you dare</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getJoke }
)( Joke );
