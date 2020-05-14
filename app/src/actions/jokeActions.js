import axios from 'axios';

export const FETCH_JOKE_START = 'FETCH_JOKE_START';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';
// async action creator
export const getJoke = () => dispatch => {
  dispatch( { type: FETCH_JOKE_START } );
  axios
    .get( 'https://api.icndb.com/jokes/random?' )
    .then( res => {
      dispatch( { type: FETCH_JOKE_SUCCESS, payload: res.data.value } );
    } )
    .catch( err => {
      dispatch( { type: FETCH_JOKE_FAILURE, payload: err.response } );
    } );
};

