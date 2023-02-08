function printAll(arr){
    if(Array.isArray(arr)){ // 배열인지 아닌지 
        for(let i =0; i < arr.length;i++){
            console.log(arr[i]);
        }
    }else{
        console.log("배열이 아닙니다");
    }
}
// 배열 사용하는 유용한 함수들 
// 자바 : 배열 고정배열 / 자바스크립트는 가변배열 
const animals = ["뱀","고양이","강아지","토끼"]; // new Array(3); animals[0]="고양이"... 
animals[3]="햄스터";
//animals = ["고양이","강아지","토끼","햄스터"];// new Array(4); 
console.log(animals);
console.log(Array.isArray(animals));
console.log(Array.isArray({}));

// 해당 요소가 몇번째있니 => indexOf(요소값)
console.log(animals.indexOf('뱀')); // -1 : 없는 요소 
// 해당 요소가 있니?
console.log(animals.includes('뱀'));
//delete animals[0];

// 배열 자체의 내용 수정 
// 추가 
// 젤 마지막 인덱스에 요소 추가 
animals.push("호랑이");
console.log(animals);
// 젤 처음 인덱스에 요소 추가 
let count = animals.unshift("사자");
console.log(animals);
console.log(count);

//삭제 
// 젤 마지막 요소 삭제 : 현재 배열의 마지막 요소를 꺼내온다 
let value = animals.pop();
console.log(animals);
console.log(value);
// 젤 첫번째 요소 삭제 
value = animals.shift();
console.log(animals);
console.log(value);

// 배열 자르기 
let cutArr = animals.splice(2,1, '곰','말','양'); // 2번째 인덱스부터 한개 짜르고 뒤에부터 값을 추가로 넣어줘 
console.log(animals);
console.log(cutArr);

// 기존 배열을 건드리지 않고 새로운 배열 리턴 
                        // 2 : endIdx 마지막 인덱스값은 포함 안된다 
let newArr = animals.slice(2,-2);
console.log(animals);
console.log(newArr);

// 여러개의 배열 붙여주기 
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3= arr1.concat(arr2);
console.log(arr3);

let arr4 = arr3.reverse();
console.log(arr4);

// 여러개의 중첩된 arr 한개로 풀기 

let arr=[ [1,2,3],[4,[5,6,[7,8]]]];
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(3));
