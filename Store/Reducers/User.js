import produce from 'immer';
import createReducer from "./ReducerUtils";


const initialState = {
  user: {
    name: " ",
    password: " ",
    mobile: " "
  }
}

const users = {
  setName(state, action) {
    debugger
    state.user.name = action.payload;
  },
  setPassword(state, action) {
    debugger
    state.user.password = action.payload;
  },
  setMobile(state, action) {
    state.user.mobile = action.payload;
  },

};

export default produce((state, action) => createReducer(state, action, users), initialState);
