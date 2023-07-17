import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

const defaultState = {
    users: [],
}

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_USERS = 'GET_USERS';

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER: return {...state, users: [...state.users, action.payload]}
        case DELETE_USER: return {...state, users: state.users.filter((user) => user !== action.payload)}
        case GET_USERS: return {...state, users: [...state.users, ...action.payload]}
        default: return state;

    }
}

export const store = createStore(reducer, applyMiddleware(thunk, logger));

export const addUserAction = (payload) => ({type: ADD_USER, payload})
export const getUsersAction = (payload) => ({type: GET_USERS, payload})
