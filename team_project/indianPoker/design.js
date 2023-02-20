class gameD{
    constructor(){
        this.game = `<div class = "comBar"><img class="gold" src="./금화.png" alt=""><div class = "money comMoney"></div></div>
        <div class="top">
        <img class="indian" src="./인디언.png" alt="">
        </div>
        <div class="table">
        <div class="top">
        <div class="comCard"></div></div>
        <div class="center">
        <div class="bet"></div><div class = "deckBox"> <img class = "deck1" src="./card.png" alt=""><img class = "deck2" src="./card.png" alt=""><img class = "deck3" src="./card.png" alt="">
        </div>
        </div>
        <div class="bottom">
        <div class="myCard">
        </div></div>
        </div>
        <div class = "myBar"><img class="gold" src="./금화.png" alt=""><div class = "money myMoney"></div><div class="betBar">
        <button class="raise">Raise</button>
        <button class="call">Call</button>
        <button class="die">Die</button>
    </div>`;
        this.rules = `<div class="ruleBox">
        <div class="ruleTop">
            <div></div>
            <span>RULES</span>
            <div class = "exitBox"><button class="ruleExit">X</button></div>
        </div>
        <div class="ruleMain">
            <p>1. 스무장의 카드로 시작한다.</p>
            <p>2. 카드에는 1~10까지의 숫자가 쓰여있고 플레이어는 각각 한장의 카드를 지급받는다.</p>
            <p>3. 플레이어는 자신의 카드를 볼 수 없고 오직 상대방의 카드만 확인할 수 있다.</p>
            <p>4. 상대방의 카드를 보고 배팅을 시작한다.</p>
            <p>5. 플레이어는 Raise, Call, Die 중 선택할 수 있다.</p>
            <p>6. 배팅 종료 후 플레이어는 자신의 카드를 확인할 수 있고 숫자가 더 낮은 카드를 가진 플레이어가 승리한다.</p>
            <p>7. 승리한 플레이어는 배팅 금액을 모두 가져가고 소지한 금액이 0원이 되면 게임은 종료된다.</p>
        </div>
    </div>`;
        this.mainMenu = `<div class="menuList">
            <div class="imgBox">
            <img src="./인디언.png" alt="">
            </div>
            <div class="start"><button class="startBtn">START</button></div>
            <div class="rule"><button class="ruleBtn">RULES</button></div>
            <div class="exit"><button class="exitBtn">EXIT</button></div>
            </div>`;
    }
}
