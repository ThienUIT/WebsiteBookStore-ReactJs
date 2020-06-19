import axios from 'axios'
import {API_URL} from './Config'

export default function CallApi(endpoint, method = 'GET', body){
    return  axios({
        method: method,
        url:`${API_URL}/${endpoint}`,
        data: body
    }).catch(error =>{
        console.log(error)
    })
}