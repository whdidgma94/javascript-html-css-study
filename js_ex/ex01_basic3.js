let randNum = (min, max) => parseInt(Math.random() * (max - min+1)) + min;
let arr = [];
let setLotto = arr=>{
    for(let i =0;i<7;i++){
        let num = randNum(0,1);
        arr[i]=num*7;
    }
}
setLotto(arr);
console.log(arr);
let checkLotto = arr=>{
    let cnt=0;
    for(let i = 0 ; i < arr.length;i++){
        if(arr[i]==7){
            cnt++;
        }else{
            cnt=0;
        }
        if(cnt==3){
            return true;
        }
    }
    return false;
}
if(checkLotto(arr)){
    console.log("당첨");
}else{
    console.log("꽝");
}
//내가 만든 정렬 
//거꾸로 저장
let numArr = [1001,3423,23,32123,123];
let mySort = arr =>{
    for(let i = 0 ; i < arr.length;i++){
        for(let k = i ; k < arr.length;k++){
            if(arr[i]>arr[k]){
                let temp = arr[i];
                arr[i]=arr[k];
                arr[k]=temp;
            }
        }
    }
}
mySort(numArr);
console.log(numArr);
let myReverse = arr=>{
    let temp = [];
    for(let i = 0 ; i < arr.length;i++){
        temp[i]=arr[arr.length-1-i];
    }
    return temp;
}
numArr=myReverse(numArr);
console.log(numArr);