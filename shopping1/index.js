const addBtn = document.querySelector('.footer_btn');
const inputText = document.querySelector('.footer_input');
var items = document.querySelector('.items');
let itemList = document.querySelectorAll(".item_row");
console.log(addBtn);
items.onclick = ()=>{
    if(event.target.classList.contains("item_delete")){
        deleteItem(event.target.parentElement);
    }
}

addBtn.addEventListener('click',()=>{
    if(inputText.value!=''){
        addItem(inputText.value);
    }
})

function deleteItem(item){
    items.removeChild(item.parentElement);
    itemList = document.querySelectorAll(".item_row");
}
function addItem(name){
    let item_row = document.createElement('li');
    item_row.className='item_row';
    let item = document.createElement('div');
    item.className='item';
    let item_name = document.createElement('span');
    item_name.className='item_name';
    let item_delete = document.createElement('button');
    item_delete.className='item_delete';
    item_name.innerHTML=name;
    item_delete.innerHTML='<i class="fa-solid fa-trash"></i>'
    item.appendChild(item_name);
    item.appendChild(item_delete);
    item_row.appendChild(item);
    items.appendChild(item_row);
    itemList = document.querySelectorAll(".item_row");
}