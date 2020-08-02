export default function CheckPass(pass1, pass2, callback){
    var results = false
    if(pass1 === pass2){
        results = true;
        return callback(results);        
    }
    else return callback(results)
}