const total = 10;
const data = [
{name:"강민기", count:3},
{name:"김범진", count:6},
{name:"김성윤", count:2},
{name:"김영균", count:3},
{name:"노상권", count:5},
{name:"박병준", count:3},
{name:"박일권", count:5},
{name:"양재혁", count:6},
{name:"윤준영", count:7},
{name:"이주혜", count:8},
{name:"이지원", count:5},
{name:"정태현", count:4},
{name:"조양흠", count:9},
{name:"조영곤", count:3},
];
var sortCount = "count";
const list = document.querySelector('.list');
window.addEventListener('load',()=>{getData()})
function getData(){
    data.sort(function(a,b){
        return b[sortCount] - a[sortCount];
    });
    console.log(data);
    for(let i = 0 ; i < data.length;i++){
        let div = document.createElement('div');
        div.className='item';
        insertData(data[i].name,data[i].count,div);
        list.appendChild(div);
    }
}
function insertData (name,num,div){
    if(num<=2){
        div.innerHTML = `<div class="inner" style="width:${num*10}%;background-color:red;">
        <div class="name">${name}</div>
        <div class="percent">${num*10}%</div>
    </div>`; 
    }else{
    div.innerHTML = `<div class="inner" style="width:${num*10}%;background-color:#673ab7;">
    <div class="name">${name}</div>
    <div class="percent">${num*10}%</div>
</div>`;}
    
}
