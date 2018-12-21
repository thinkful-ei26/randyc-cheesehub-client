import { API_BASE_URL } from '../config';

//async function action  -- fetchCheese 
// import cheeses form somewhere...

// FETCH_CHEESE_REQUEST,
// FETCH_CHEESE_SUCCESS,
// FETCH_CHEESE_ERROR

// .then(data => console.log('>>>>', data))

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => {

  return(dispatch) => {
    fetch(`${API_BASE_URL}/cheeses`)
    .then(response => response.json())
    .then(data => dispatch(fetchCheeseSuccess(data)))
    .catch(error => console.log(error))

  }
 
}

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = (data) => {

  console.log('>> data >>',data);

  return {
     type: 'FETCH_CHEESE_SUCCESS',
     data

  }
 
}

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = (error) => {

  return {
     type: 'FETCH_CHEESE_ERROR',
     error

  }
 
}