
export default function GetRandomQoutes(array){
    var result = null;
    if(array.length > 0){
        var rand = Math.floor((Math.random() * array.length) + 0);
        result = array[rand];
    }
    return result
}
