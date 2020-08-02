import {FETCH_AUTHORDATA, ADD_AUTHOR} from './../actiontypes/ActionTypes'
import CallApi from 'Utils/ApiCaller'


export const actFetchAuthorDataRequest = ()=>{
    return dispatch => {
        return CallApi('authors','GET',null).then(res =>{
            dispatch(actFetchAllAuthorData(res.data))
        })
    }
}

export const actAddAuthorRequest = (author) => {
    return dispatch =>{
        return CallApi('authors','POST',author).then(res=>{
            console.log(res.data)
            dispatch(actAddAuthor(res.data))
            window.location.reload();
        })
    }
}

export const actAddAuthor = (author) =>{
    return{
        type:ADD_AUTHOR,
        author
    }
}

export const actFetchAllAuthorData = (author) =>{
    return {
        type: FETCH_AUTHORDATA,
        author
    }
}