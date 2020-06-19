import { ADD_TO_CART,UPDATE_QUANTITY, DELETE_FROM_CART } from './../actiontypes/ActionTypes'

export const actAddToCart = (book, quantity) =>{
    return {
        type:ADD_TO_CART,
        book,
        quantity
    }
}

export const actUpdateQuantity = (quantity,book) =>{
    return{
        type:UPDATE_QUANTITY,
        quantity,
        book
    }
}

export const actDeleteFromCart = (book) =>{
    return {
        type: DELETE_FROM_CART,
        book
    }
}