import {
  GET_USER_SUCCESS,
  IGetUserSuccess,
  IUser,
  IUserAction,
} from './interfaces';

const initialState = {
  name: {
    first: 'Pluto',
    last: 'Mars'
  }
};

/**
 * Get user success action creator
 * 
 * @param {any} user
 *
 * @returns {IGetUserSuccess}
 */
export const getUserSuccess = (user: IUser): IGetUserSuccess => {
  return { type: GET_USER_SUCCESS, user };
};

export default (state = initialState, action: IUserAction) => {
  switch(action.type) {
    case GET_USER_SUCCESS: return state; break;
    default: return state;
  };
};

