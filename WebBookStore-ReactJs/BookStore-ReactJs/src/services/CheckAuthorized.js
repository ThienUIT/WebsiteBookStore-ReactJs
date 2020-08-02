import jwt from 'jsonwebtoken'

export default function CheckAuthorized(){
    if(localStorage.getItem('jwtToken') !== null){
        var data = localStorage.getItem('jwtToken')
        var user = jwt.decode(data).result
        if(user.role === 1){
            return true
        }
    }
    return false
}