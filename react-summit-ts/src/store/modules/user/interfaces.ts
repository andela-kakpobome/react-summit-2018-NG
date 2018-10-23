// define types
export const GET_USER = 'react-summit/user/GET_USER';
export type GET_USER = 'react-summit/user/GET_USER';

export const GET_USER_SUCCESS = 'react-summit/user/GET_USER';
export type GET_USER_SUCCESS = 'react-summit/user/GET_USER';

// define interfaces
export interface IUserAction {
  type: GET_USER,
  [key: string]: any;
}

export interface IGetUserSuccess {
  type: GET_USER_SUCCESS,
  user: IUser;
}

export interface IUser {
  name: {
    first: string;
    last: string;
  },
  role: {
    id: string,
    title: string
  }
}