const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_btn');
let id = 1;
const itemList = [];
addBtn.addEventListener('click',()=>{
    addItem();
});

input.addEventListener('keydown',(event)=>{
    if(event.isComposing) return;
    if(event.code==='Enter'){
        addItem();
    }
});

function addItem(){
    let content = String(input.value);
    if(content.trim().length == 0){
        input.value="";
        input.focus();
        return;
    }
    for(let i = 0 ; i < itemList.length;i++){
        if(input.value==itemList[i]){
            alert('이미 있는 상품입니다.')
            return;
        }
    }
    itemList.push(input.value);
    const item = document.createElement('li'); //<li></li>
    item.classList.add('item_row');
    item.setAttribute('data-id', String(id));
    item.innerHTML=`    <div class="item">
    <span class="item_name"> ${content} </span>
    <button class="item_delete"> <i class="fa-solid fa-trash-can" data-id='${id}' onclick='deleteItem(${id})'></i> </button>
    </div>`;
    items.appendChild(item);
    id+=1;
    input.value = "";
    input.focus();
    console.log(itemList);
}
function deleteItem(id){
    if(id!==null){
        const delItem = document.querySelector(`.item_row[data-id='${id}']`);
        console.log(id);
        delItem.remove();
    }
}
