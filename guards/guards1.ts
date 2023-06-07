function strip(x:string|number) {
    if (typeof x==='number'){
        return x.toFixed(2)
    }
    return x.trim()
}

console.log(strip(3.145678));
console.log(strip('     rtyufggjjhiiu  '));

class MyResponse{
    header='responce header'
    result='response result'
}
class MyError{
    header='error header'
    message='error message'
}

function handle (res:MyResponse|MyError) {
    if (res instanceof MyResponse){
        return {
            info:res.header+res.result
        }
        else{
            return {info: res.header+res.header}
        }
}
