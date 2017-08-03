import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS
} from "../constants";

const INITIAL_STATE = {
  movies: [],
  message: "Search For Movies"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        movies: action.payload,
        message: ""
      };
    case FETCH_MOVIES_FAILURE:
      return {
        movies: [],
        message: action.payload
      };
    case FETCH_MOVIES_REQUEST:
      return {
        message: action.payload
      };
    default:
      return state;
  }
};
