import { FETCH_BOOKDATA, ADD_BOOK } from './../actiontypes/ActionTypes'

const initialState = []

export default function AllBook(state = initialState, action){
    switch(action.type){
        case FETCH_BOOKDATA:
            state = action.book
            return [...state]
        case ADD_BOOK:
            state.push(action.book)
            return[...state]
        default:
            return [...state]
    }
}