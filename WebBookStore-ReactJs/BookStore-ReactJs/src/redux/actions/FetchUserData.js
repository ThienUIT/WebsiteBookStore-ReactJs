import {FETCH_USERDATA, SET_CURRENT_USER, LOGIN_FAIL} from '../actiontypes/ActionTypes'
import CallApi from 'Utils/ApiCaller'
import jwt from 'jsonwebtoken'

const FAILED = 'Invalid Username or Password' 

export const actFetchUserData = users =>{
    return {
        type: FETCH_USERDATA,
        users
    }
}

export const actFetchUserDataRequest = () =>{
    return dispatch =>{
        return CallApi("users", "GET", null).then(response =>{
            dispatch(actFetchUserData(response.data.data))
        })
    }
}

export const setCurrentUser = user =>{
    return {
        type: SET_CURRENT_USER,
        user
    }
}
export const loginFailed = message =>{
    return{
        type: LOGIN_FAIL,
        message
    }
}

export const actLogin = ( user, callback ) =>{
    return dispatch =>{
        return CallApi("users/login", 'POST', user).then(res =>{
            if(res.data.token){
                const token = res.data.token;
                localStorage.setItem('jwtToken', token)
                dispatch(setCurrentUser(jwt.decode(token).result))
                if(typeof(callback) === "function" ){
                    callback(res.data.token)
                }
            }
            else dispatch(loginFailed(FAILED))
        })
    }
}


export const actLogout = () =>{
    return dispatch =>{
        localStorage.removeItem('jwtToken');
        dispatch(setCurrentUser({}))
    }
}