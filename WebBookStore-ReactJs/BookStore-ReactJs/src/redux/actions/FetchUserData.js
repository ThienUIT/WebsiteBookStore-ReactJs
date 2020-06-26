import {FETCH_USERDATA} from '../actiontypes/ActionTypes'
import CallApi from 'Utils/ApiCaller'

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