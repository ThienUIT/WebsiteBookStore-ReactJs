import { ADD_TO_CART } from "redux/actiontypes/ActionTypes"
import { UPDATE_QUANTITY } from "redux/actiontypes/ActionTypes";
import { DELETE_FROM_CART } from "redux/actiontypes/ActionTypes";
import jwt from 'jsonwebtoken'
import { isEmpty } from "lodash";
import { RELOAD_CART } from "redux/actiontypes/ActionTypes";

const checkLocalStorage = () => {
    var results = null
    if(localStorage.length){
        if(localStorage.getItem('jwtToken') !== null){
            var userID = jwt.decode(localStorage.getItem('jwtToken')).result.accountID;
            if(localStorage.getItem(userID) !== null ){
                results = JSON.parse(localStorage.getItem(userID))
                return results
            }
        }
    }
    return results
}

const setState = checkLocalStorage()

const initialState= setState ? setState : []


export default function BookCart( state = initialState, action ){
    var {book, quantity, cart} = action;
    var index = -1; 
    if(localStorage.length > 0){
        if(localStorage.getItem('jwtToken') !== null ){
            var userID = jwt.decode(localStorage.getItem('jwtToken')).result.accountID
        }
    }
    switch(action.type){
        case ADD_TO_CART:
            index = findIndex(state, book)
            if(index !== -1){
                state[index].quantity += quantity
            }
            if(index === -1) {
                state.push({
                    book,
                    quantity
                })
            }
            if(userID !== undefined)
                localStorage.setItem(userID, JSON.stringify(state))
            return [...state];
        case UPDATE_QUANTITY:
            index = findIndex(state, book)
            if(index !== -1){
                state[index].quantity = quantity
            }
            if(userID !== undefined)
                localStorage.setItem(userID, JSON.stringify(state))
            return [...state];
        case DELETE_FROM_CART:
            index = findIndex(state, book)
            if(index !== -1){
                state.splice(index,1)
            }
            if(userID !== undefined){
                localStorage.setItem(userID, JSON.stringify(state))
                let item = JSON.parse(localStorage.getItem(userID))
                if(isEmpty(item)){
                    localStorage.removeItem(userID)
                }
            }
            return [...state]
        case RELOAD_CART:
            state = cart
            return [...state]
        default:
            return [...state];
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
