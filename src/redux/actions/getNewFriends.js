import * as types from "../actionTypes";

const addNewFriends = (friend) => (dispatch) => {
  
  dispatch({
    type: types.GET_NEW_FRIENDS,
    friend,
  });
};

export default addNewFriends;
