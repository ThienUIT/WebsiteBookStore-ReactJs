import {FETCH_AUTHORDATA} from './../actiontypes/ActionTypes'
import CallApi from 'Utils/ApiCaller'


export const actFetchAuthorDataRequest = ()=>{
    return dispatch => {
        return CallApi('authors','GET',null).then(res =>{
            dispatch(actFetchAllAuthorData(res.data))
        })
    }
}


export const actFetchAllAuthorData = (author) =>{
    return {
        type: FETCH_AUTHORDATA,
        author
    }
}