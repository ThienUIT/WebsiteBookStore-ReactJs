import { FETCH_BOOKDATA } from './../actiontypes/ActionTypes'

const initialState = []

export default function AllBook(state = initialState, action){
    switch(action.type){
        case FETCH_BOOKDATA:
            state = action.book
            return [...state]
        default:
            return [...state]
    }
}