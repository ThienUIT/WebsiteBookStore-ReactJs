import {FETCH_CATEGORYDATA} from './../actiontypes/ActionTypes'

const initialState = []

export default function Category(state = initialState, action){
    switch(action.type){
        case FETCH_CATEGORYDATA:
            state = action.category
            return [...state]
        default:
            return [...state]
    }
}