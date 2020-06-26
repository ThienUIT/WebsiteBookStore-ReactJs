import {FETCH_CATEGORYDATA} from './../actiontypes/ActionTypes'
import CallApi from 'Utils/ApiCaller'

export const actFetchCategoryData = category =>{
    return{
        type:FETCH_CATEGORYDATA,
        category
    }
}

export const actFetchCategoryDataRequest = ()=>{
    return dispatch =>{
        return CallApi('category','GET',null).then(response =>{
            dispatch(actFetchCategoryData(response.data))
        })
    }
}