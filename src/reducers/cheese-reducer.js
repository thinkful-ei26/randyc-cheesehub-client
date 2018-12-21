//actions
import {

  FETCH_CHEESE_REQUEST,
  FETCH_CHEESE_SUCCESS,
  FETCH_CHEESE_ERROR

} from '../actions/cheese';

const initialState = {
  
  cheeses: [],
  loading: false,
  error: null

}


//fetchCheesesRequest

//fetchCheesesSuccess

//fetchCheesesError

export function cheeseReducer(state=initialState,action) {

  //console.log('> ', action.loading);

  if(action.type === FETCH_CHEESE_REQUEST){

    return Object.assign({}, state, {

      loading: true


    })

  }
  else if(action.type === FETCH_CHEESE_SUCCESS){

    console.log('in success: ',action.data.cheeses);
 
    return Object.assign({}, state, {

      cheeses : action.data.cheeses,
      loading: false,
 
    })


  } 
  else if(action.type === FETCH_CHEESE_ERROR){

    return Object.assign({}, state, {

      loading: false,
      error: action.error


    })


  } 

  //default
  return state;


}