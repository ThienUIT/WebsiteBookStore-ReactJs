import { FETCH_BOOKDATA } from './../actiontypes/ActionTypes'
import CallApi from 'Utils/ApiCaller'

export const actFetchAllBookData = (book) =>{
    return {
        type: FETCH_BOOKDATA,
        book
    }
}

export const actFetchAllBookDataRequest = () =>{
    return dispatch =>{
        return CallApi('allbook','GET',null).then(response =>{
            dispatch(actFetchAllBookData(response.data))
        })
    }
}