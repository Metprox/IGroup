import {state} from './state.js';

export const UPDATE_ID = (State, id) => {
    State.currentId = parseInt(id)
}

export const UPDATE_RATINGS = (State, data) => {
    State.ratings = data
}