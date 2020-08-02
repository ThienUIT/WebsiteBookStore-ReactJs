import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from "redux/actiontypes/ActionTypes";

const initialState = [];

export default function FavoriteList (state = initialState, action){
    var { book, isFavorite } = action
    var index = -1
    switch(action.type){
        case ADD_TO_FAVORITE:
            index = findIndex(state, book)
            if(index !== -1){
                state[index].isFavorite = !isFavorite;
                state.splice(index,1);
            }
            if(index === -1) {
                state.push({book, isFavorite})
            }
            return [...state]
        case DELETE_FROM_FAVORITE:
            index = findIndex(state, book)
            if(index !== -1){
                state.splice(index,1)
            }
            return [...state]
        default:
            return [...state]
    }
}

const findIndex = (BookCart, book) =>{
    var index = -1;
    if(BookCart.length > 0){
        for(let i=0; i<BookCart.length; i++){
            if(BookCart[i].book.bookID === book.bookID){
                index = i;
                break;
            }
        }
    }
    return index;
}