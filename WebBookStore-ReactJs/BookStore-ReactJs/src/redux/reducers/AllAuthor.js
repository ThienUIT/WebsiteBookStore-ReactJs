import {FETCH_AUTHORDATA} from '../actiontypes/ActionTypes'

const InitialState =[]

export default function AllAuthor (state = InitialState, action){
    switch(action.type){
        case FETCH_AUTHORDATA:
            state = action.author
            return [...state]
        default:
            return [...state]
    }
}