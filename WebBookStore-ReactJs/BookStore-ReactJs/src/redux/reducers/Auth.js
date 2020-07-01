import { SET_CURRENT_USER } from "redux/actiontypes/ActionTypes"
import { isEmpty } from "lodash"
import { LOGIN_FAIL } from "redux/actiontypes/ActionTypes"
import jwt from "jsonwebtoken"

var data = localStorage.getItem('jwtToken')
var user = jwt.decode(data)


const initialState = (user) ? { isAuthenticate: true, user: user.result} : {
    isAuthenticate : false,
    user : {},
}

export default function Auth (state = initialState, action ){
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...Object,
                isAuthenticate: !isEmpty(action.user),
                user: action.user,
            }
        case LOGIN_FAIL:
            return {
                ...Object,
                message: action.message
            }
        default:
            return {...state}
    }
}

