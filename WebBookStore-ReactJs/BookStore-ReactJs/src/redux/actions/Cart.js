import { ADD_TO_CART,UPDATE_QUANTITY, DELETE_FROM_CART, RELOAD_CART } from './../actiontypes/ActionTypes'
import jwt from 'jsonwebtoken'

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

export const reloadCart = ( ) =>{
    var results = []
    if(localStorage.length){
        if(localStorage.getItem('jwtToken') !== null){
            var userID = jwt.decode(localStorage.getItem('jwtToken')).result.accountID;
            if(localStorage.getItem(userID) !== null ){
                results = JSON.parse(localStorage.getItem(userID))
            }
        }
    }
    return{
        type: RELOAD_CART,
        cart: results
    }
}
