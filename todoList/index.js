const list = document.querySelector('#list');
const addBtn = document.querySelector('#addBtn');
const inputTitle = document.querySelector('#title');
const inputContent = document.querySelector('#content');
const garbage = document.querySelector('#garbage');
const msgBox = document.querySelector('.msg-box');
var tempId=0;
addBtn.addEventListener('click',()=>{
    if(inputTitle.value==''||inputContent.value==''){
        alert("제목과 내용을 다 작성해야합니다.");
        return;
    }
    addContent(inputTitle.value,inputContent.value);
});
function addContent(title,content){
    let div = document.createElement('div');
    div.className='item';
    div.id=tempId;
    tempId++;
    div.setAttribute("ondragstart","onDragStart(event)" )
    div.draggable=true;
    div.innerHTML=`<h4 class="title">${title}</h4>
    <span class="msg">${content}</span>`;
    inputTitle.value='';
    inputContent.value='';
    list.appendChild(div);
    msgBox.innerHTML="게시글 작성완료";
    showMsg();
}
function showMsg(){
    msgBox.classList.add("active");
    setTimeout(()=>msgBox.classList.remove("active"),2000);
}
garbage.addEventListener('dragover', e=> e.preventDefault());
garbage.addEventListener('drop',e=>{
    const id = e.dataTransfer.getData('id')
    const itemList = document.querySelectorAll('.item');
    var item;
    itemList.forEach(it=>{
        if(it.id==id){
            item=it;
        }
    })
    msgBox.innerHTML="게시글 삭제완료";
    showMsg();
    deleteItem(item);
});
function deleteItem(item){
    list.removeChild(item);
}
function onDragStart(event) {
    event.dataTransfer.setData('id', event.target.id);
}
