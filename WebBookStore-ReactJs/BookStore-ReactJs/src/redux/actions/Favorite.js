import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from './../actiontypes/ActionTypes';

export const actAddToFavorite = (book, isFavorite) => {
    return {
        type: ADD_TO_FAVORITE,
        book,
        isFavorite
    }
}

export const actDeleteFromFavorite = (book) => {
    return {
        type: DELETE_FROM_FAVORITE,
        book
    }
}