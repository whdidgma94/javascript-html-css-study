var count = 1;
const table = document.querySelector('table');
const tds = document.querySelectorAll('td');

setNumber();
tds.forEach((td)=>{
    td.addEventListener('click',()=>{
        if(td.innerHTML==count){
            getNumber();
            console.log(td);
            count++;
        }
    })
});
function setNumber(){
    for(let i = 0 ; i <25;i++){
        tds[i].innerHTML=i+1;
    }
    console.log("tds="+tds);
console.log(copyArr);
}
function getNumber(){

}