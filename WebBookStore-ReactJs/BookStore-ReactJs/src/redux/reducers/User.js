import {FETCH_USERDATA} from '../actiontypes/ActionTypes'

const InitialState = []

export default function User(state = InitialState, action){
    switch(action.type){
        case FETCH_USERDATA:
            state = action.users
            return [...state]
        default:
            return [...state];
    }
}