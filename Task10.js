// 1.1
//let num1 = prompt('num1');
//let num2 = prompt('num2');

function part1(num1, num2) {

    return num1 * num2;
    if(typeof num1 ==='String'){
        console.log( 'аргумент должен быть числом!!!');
    }
}

console.log( part1(1,2));

//1.2
function part12(num){

    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

console.log( part12(6));

//2
function generatePass(length) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    res = '';
    for (var i = 0, n = chars.length; i < length; ++i) {
        res += chars.charAt(Math.floor(Math.random() * n));
    }
    return res;
}

console.log(generatePass(8));


