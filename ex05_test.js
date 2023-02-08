
// 1.랜덤하게 배열 1~100 10개 생성 
let arr = [];
for(let i = 0 ; i < 10;i++){
    let num = parseInt(Math.random()*100);
    for(let k = 0 ; k <arr.length;k++){
        if(num==arr[k]){
            i--;
            continue;
        }
    }
    arr[i]=num;
}
// 2. 배열 값 출력 : forEach 사용 
arr.forEach((num)=>console.log(num));
// 3. 배열 값중에 홀수만 따로 배열 만들기 : filter 사용 
let arr2=arr.filter(num=>num%2==1);
console.log(arr2);
// 4. 배열의 총합 출력 : reduce 사용
let num = arr.reduce((sum,value)=>{
    return sum+=value;
},0);
console.log(num);
// 5. 배열의 짝수들의 총합 : 2개 filter reduce 같이 사용 
let arr3=arr.filter(num=>num%2==0);
let num2 = arr3.reduce((sum,value)=>{
    return sum+=value;
},0);
console.log(num2);
// 6. 오름차순 정렬 : sort 사용 
arr.sort((a,b)=>a - b);
console.log(arr);
// 7. 객체 배열을 동물 나이순으로 내림차순 정렬 