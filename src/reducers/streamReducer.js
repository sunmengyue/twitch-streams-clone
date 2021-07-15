import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM,
} from '../actions/types';

export default function streamReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_STREAMS:
      //   return { ...state, ..._.mapKeys(action.payload, 'id') };
      const streamsObj = action.payload.reduce((acc, stream) => {
        acc[stream.id] = stream;
        return acc;
      }, {});
      return { ...state, ...streamsObj };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload); //we dispatch id in actions
    default:
      return state;
  }
}
