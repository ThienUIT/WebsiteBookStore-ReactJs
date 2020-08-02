import {FETCH_AUTHORDATA, ADD_AUTHOR} from '../actiontypes/ActionTypes'

const InitialState =[]

export default function AllAuthor (state = InitialState, action){
    switch(action.type){
        case FETCH_AUTHORDATA:
            state = action.author
            return [...state]
        case ADD_AUTHOR:
            state.push(action.author)
            return [...state]
        default:
            return [...state]
    }
}