
let randomNum = parseInt(Math.random()*100)+1;
console.log(randomNum);
/*
1. 1~100 사이의 숫자를 랜덤으로 저장하고 그수가 짝수인지
홀수인지 출력하는 checkNum 함수를 만든후 호출 
*/
let checkNum = num => num%2==0 ? true : false;
console.log(checkNum(randomNum));

/*  
배열에 랜덤으로(-100 ~ 100 사이의 홀수 4개를 저장후 전부 홀수인지 검사하는 함수를 만드시오
*/
let randNum = (min, max) => parseInt(Math.random() * (max - min+1)) + min;
let arr = new Array;
for(let i = 0 ; i < 4;i++){
    arr[i]=randNum(-100,100);
}
console.log(arr);
function checkArr (arr) {
    for(let i = 0 ; i < arr.length;i++) {
        if(arr[i]%2==0){
            return false;
        }
    }
    return true;
}
console.log(checkArr(arr));