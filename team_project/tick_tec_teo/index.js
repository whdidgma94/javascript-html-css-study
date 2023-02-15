this.start = document.querySelector('.btn');
this.container = document.querySelector('.container');
var turn = true;
var cnt=0;
start.addEventListener('click', () => {
    container.innerHTML =  `
    <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>`;
    this.tds = document.querySelectorAll('td');
    tds.forEach((td)=>{
        td.addEventListener('click',()=>{
            if(td.className!='O'&&td.className!='X'){
                if(turn){
                    td.innerHTML='O';
                    td.className='O';
                }else{
                    td.innerHTML='X';
                    td.className='X';
                }
                cnt++;
                checkWin();
                if(cnt==9){
                    showDraw();
                }
                turn = !turn;
            }
        })
    })
});
function checkWin(){
    let text;
    let win=false;
    if(turn){
        text='O';
    }else{
        text='X'
    }
    for(let i = 0 ; i < tds.length;i+=3){
        if(tds[i].className==text&&tds[i+1].className==text&&tds[i+2].className==text){
            win=true;
        }
    }
    for(let i = 0 ; i < 3;i++){
        if(tds[i].className==text&&tds[i+3].className==text&&tds[i+6].className==text){
            win=true;
        }
    }
    if(tds[0].className==text&&tds[4].className==text&&tds[8].className==text){
        win=true;
    }
    if(tds[2].className==text&&tds[4].className==text&&tds[6].className==text){
        win=true;
    }
    if(win){
        showWinner();
    }
}
function showWinner(){
    let winner;
    if(turn){
        winner='O';
    }else{
        winner='X';
    }
    container.innerHTML=`
    <div class="win">${winner}승리!</div>
    `;
    start.innerHTML='다시 하기'
    container.appendChild(start);
    turn=false;
    cnt=0;
}
function showDraw(){
    container.innerHTML=`
    <div class="win">무승부</div>
    `;
    start.innerHTML='다시 하기'
    container.appendChild(start);
    turn=false;
    cnt=0;
}