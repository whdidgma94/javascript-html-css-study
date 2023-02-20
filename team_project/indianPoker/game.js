class IndianPoker {
    constructor(container) {
        this.container = container;
        this.d = new gameD();
        this.me = new Player('me');
        this.com = new Player('com');
        this.gameSet = false;
        this.totalMoney = 0;
        this.turn = 1;
        this.startBtn = null;
        this.ruleBtn = null;
        this.exitBtn = null;
        this.init();

    }

    init() {
        this.showMenu();
    }

    showMoney() {
        let myMoney = document.querySelector('.myMoney');
        myMoney.innerHTML = this
            .me
            .money
            .toLocaleString('ko-KR');
        let comMoney = document.querySelector('.comMoney');
        comMoney.innerHTML = this
            .com
            .money
            .toLocaleString('ko-KR');
        let bet = document.querySelector('.bet');
        bet.innerHTML = this
            .totalMoney
            .toLocaleString('ko-KR');
    }

    startGame() {
        this.container.innerHTML = this.d.game;
        if (this.com.money >= 500 && this.me.money >= 500) {
            this.gameSet = false;
            this.turn = 1;
            this.startBtn = null;
            this.ruleBtn = null;
            this.exitBtn = null;
            this.setGame();
            this.ante();
            this.showMoney();
            this.dealingCard();
            this.playGame();
        } else {
            alert('game over');
            this.turn = -1;
        }
        if (this.turn === -1) {
            this.init();
            this.com.money = 10000;
            this.me.money = 10000;
            this.totalMoney = 0;
        }
    }

    setGame() {
        let c1 = new Card(this.me);
        let c2 = new Card(this.com);
        while (true) {
            if (this.me.num === this.com.num && this.me.shape === this.com.shape) {
                c2 = new Card(this.com);
            } else {
                break;
            }
        }
    }
    ante() {
        this.me.money -= 500;
        this.com.money -= 500;
        this.totalMoney += 1000;
    }
    dealingCard() {
        let deck1 = document.querySelector('.deck1');
        let deck2 = document.querySelector('.deck2');
        let cardImgBox = document.createElement('div');
        cardImgBox
            .classList
            .add('deckBox');
        cardImgBox.innerHTML = `<img class = "deck" src="./card.png" alt="">`
        document
            .querySelector('.myCard')
            .appendChild(cardImgBox);
        cardImgBox.addEventListener('click', () => {
            if (this.gameSet === true) {
                document
                    .querySelector('.myCard')
                    .removeChild(cardImgBox);
                this.printRes();
            }
        })
        let cardTime = null;
        for (let i = 1; i <= 4; i++) {
            cardTime = setInterval(() => {
                if (i == 1) {
                    deck1
                        .classList
                        .add('cardMove1');
                } else if (i == 2) {
                    deck2
                        .classList
                        .add('cardMove2');
                } else if (i == 3) {
                    document
                        .querySelector('.myCard')
                        .style
                        .visibility = "";
                } else {
                    document
                        .querySelector('.comCard')
                        .style
                        .visibility = "";
                }
            }, i * 1000)
        }

        setTimeout(() => {
            clearInterval(cardTime)
        }, 4000);
        // deck1     .classList     .remove('cardMove1'); deck2     .classList
        // .remove('cardMove2');
    }

    showRules() {

        this.container.innerHTML = this.d.rules;
        let ruleExit = document.querySelector('.ruleExit');
        ruleExit.addEventListener('click', () => {
            this.showMenu();
        })
    }

    showMenu() {
        this.container.innerHTML = this.d.mainMenu;
        this.startBtn = document.querySelector('.startBtn');
        this.ruleBtn = document.querySelector('.ruleBtn');
        this.exitBtn = document.querySelector('.exitBtn');
        this
            .startBtn
            .addEventListener('click', () => {
                this.startGame();
            })
        this
            .ruleBtn
            .addEventListener('click', () => {
                this.showRules();
            })

    }
    playerTurn() {
        let raise = document.querySelector('.raise');
        let die = document.querySelector('.die');
        let call = document.querySelector('.call');
        let raiseEvent = (e) => {
            if (this.me.money >= 500) {
                this.me.money -= 500;
                this.totalMoney += 500;
                this.showMoney();
            }
        }
        raise.addEventListener('click', raiseEvent);
        let callEvent = (e) => {
            this.turn = 2;
            raise.removeEventListener('click', raiseEvent);
            this.playGame();

        }
        call.addEventListener('click', callEvent);
        die.addEventListener('click', () => {
            this.turn = 0;
            this.gameSet = true;
            raise.removeEventListener('click', raiseEvent);
            call.removeEventListener('click', callEvent);
            this.playGame();
            let table = document.querySelector(".table");
            table.addEventListener('dblclick', () => {
                if (this.gameSet !== false) {
                    this.startGame();
                }
            })
        })
        // die.addEventListener('dblclick',()=>{     if (this.gameSet === true) {
        // this.init();     } })
    }
    comTurn() {
        if (this.com.money >= 500) {
            this.com.money -= 500;
            this.totalMoney += 500;
        } else {
            return;
        }
        // this.turn = 0;
    }
    playGame() {
        if (this.turn === 1) {
            this.playerTurn();
        } else if (this.turn === 2) {
            this.comTurn();
            this.showMoney();
        }
    }
    printRes() {
        this.checkWinner(this.me, this.com);
        if (this.com.win === true) {
            this.com.money += this.totalMoney;
            alert(`${this.com.name} win`);
            this.totalMoney = 0;
        } else if (this.me.win === true) {
            this.me.money += this.totalMoney;
            alert(`${this.me.name} win`);
            this.totalMoney = 0;
        } else {
            alert(`draw`);
        }
        this.showMoney();
    }

    checkWinner(me, com) {
        if (me.num < com.num) {
            me.win = true;
            com.win = false;
        } else if (me.num === com.num) {
            me.win = false;
            com.win = false;
        } else {
            me.win = false;
            com.win = true;
        }
    }
}

let container = document.querySelector('.container');
game = new IndianPoker(container);