const contentList = document.querySelectorAll(".content");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
var lIdx=contentList.length-1;
var idx=0;
var rIdx=1;

window.addEventListener('load',()=>{
    showContents();
})
leftBtn.addEventListener('click',()=>{
    removeClassName();
    lIdx--;
    idx--;
    rIdx--;
    if(lIdx==-1){lIdx=contentList.length-1;}
    if(idx==-1){idx=contentList.length-1;}
    if(rIdx==-1){rIdx=contentList.length-1;}
    showContents();
})
rightBtn.addEventListener('click',()=>{
    removeClassName();
    lIdx++;
    idx++;
    rIdx++;
    if(lIdx==contentList.length){lIdx=0;}
    if(idx==contentList.length){idx=0;}
    if(rIdx==contentList.length){rIdx=0;}
    showContents();
})
function showContents(){
    
    addClassName();
}
function removeClassName(){
    contentList[rIdx].classList.remove("currentView");
    contentList[idx].classList.remove("currentView");
    contentList[lIdx].classList.remove("currentView");
    contentList[rIdx].classList.remove("rightView");
    contentList[idx].classList.remove("mainView");
    contentList[lIdx].classList.remove("leftView");
}
function addClassName(){
    contentList[rIdx].classList.add("currentView");
    contentList[idx].classList.add("currentView");
    contentList[lIdx].classList.add("currentView");
    contentList[rIdx].classList.add("rightView");
    contentList[idx].classList.add("mainView");
    contentList[lIdx].classList.add("leftView");
}
