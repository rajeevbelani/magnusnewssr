import { DOCTORS_LOAD } from '../actions';
import { createReducer } from './utils';

const initialState = {
  doctors: []
}

const handlers = {
  [DOCTORS_LOAD]: (state, action) => {
    if (!action.error) {
      action.payload.error = undefined
      const doctors = { doctors: action.payload }
      return doctors
    }
    return { error: action.payload }
  },
}

export default createReducer(initialState, handlers);
