const animals = ["뱀","고양이","강아지","토끼"]; 

for(let i =0; i < animals.length;i++){
    console.log(animals[i]);
}
// 콜백함수는 화살표 함수만 사용할 수 있다.
// 고차함수 : 콜백함수가 들어가 있는것 : 매개변수로 함수(화살표함수)를 줘야함

// forEach
console.log("===================");
// for(int num : list){ System.out.println(num)} // 배열의 요소 처음부터 끝까지 가져온다
// val : 배열의 요소를 한개씩 가져와서 순차적으로 이 함수를 호출한것 

animals.forEach((val)=>console.log(val));

function myCallback(num){
    console.log(num)
}
function printAll(arr, callback ){
    for(let i =0; i < arr.length;i++){
        callback(arr[i]);
    }
}
printAll([1,2,3,4,5],myCallback);

let cat ={kind:'고양이',  age:5};
let dog ={kind:'개',  age:4};
let rabbit ={kind:'토끼',  age:0.5};
let hamster ={kind:'햄스터',  age:1};
let pets=[cat,dog,rabbit,hamster, cat];

// find 찾아라 : 속성(key)값이 없거나 value 없다고 에러를 띄우지 않는다 
let res = pets.find((obj)=>obj.owner==='뱀');
console.log(res); //없으면 undefined
res = pets.find((obj)=>obj.kind==='고양이');
console.log(res);
res = pets.findIndex((obj)=>obj.kind==='고양이');
console.log(res); // 첫번째 고양이 인덱스만 나온다 

// 모든 배열의 요소의 조건이 맞으면 true
res = pets.every(obj => obj.kind==='고양이');
console.log(res);
// 모든 배열의 요소의 조건이 한개라도 맞으면 true
res = pets.some(obj => obj.kind==='고양이');
console.log(res);

// 배열의 요소가 조건이 맞으면 따로 새로운 배열빼서 만들어준다 
res = pets.filter(obj=>obj.kind==='고양이');
console.log(res);

let array=[1,2,3,4,5];
res = array.map(num=> num*10);
console.log(array);
console.log(res);
let text = ['hi','abc','ba','toy'];
text.sort();
console.log(text);
let number =[0,5,4,1,100];

number.sort(); // [ 0, 1, 100, 4, 5 ]
console.log(number);
// 오름차순 
number.sort((a,b)=> a - b);
console.log(number);
// 내림차순 
number.sort((a,b)=> b - a);
console.log(number);
// reduce : 감소 : 배열의 요소를 한개로 합침 

res = number.reduce((sum,value)=>{
    console.log(`sum ${sum} , value ${value}`);
    return sum+=value;
},0);

console.log(res);

console.log("===================");

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
console.log("===================");
// 2. 배열 값 출력 : forEach 사용 
arr.forEach((num)=>console.log(num));
console.log("===================");
// 3. 배열 값중에 홀수만 따로 배열 만들기 : filter 사용 
let arr2=arr.filter(num=>num%2==1);
console.log(arr2);
console.log("===================");
// 4. 배열의 총합 출력 : reduce 사용
let num = arr.reduce((sum,value)=>{
    return sum+=value;
},0);
console.log(num);
console.log("===================");
// 5. 배열의 짝수들의 총합 : 2개 filter reduce 같이 사용
let num2 = (arr.filter(num=>num%2==0)).reduce((sum,value)=>{
    return sum+=value;
},0);
console.log(num2);
console.log("===================");
// 6. 오름차순 정렬 : sort 사용 
arr.sort((a,b)=>a - b);
console.log(arr);
console.log("===================");
// 7. 객체 배열을 동물 나이순으로 내림차순 정렬 
pets.sort((obj1,obj2)=>obj2.age - obj1.age);
console.log(pets);