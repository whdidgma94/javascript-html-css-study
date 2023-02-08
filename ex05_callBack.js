// 콜백 함수 : 함수의 매개 변수 콜백함수를 사용하면 , 그 해당함수 콜백 함수 호출부분 위임


function say_welcome(name){
    console.log(`반갑습니다 ${name}님`);
}

say_welcome("조양흠");

function say_bye(name){
    console.log(`안녕히 가세요 ${name}님`);
}

say_bye("조양흠");

function intro(lastName,firstName,callback){
    let fullName = lastName + firstName;
    callback(fullName);
}
intro("조","양흠",say_welcome);
intro("조","양흠",say_bye);