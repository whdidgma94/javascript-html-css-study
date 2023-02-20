class App {
    constructor() {
        this.main = document.querySelector('div');
        this.start = document.querySelector('.start');
        this.timer = document.querySelector('header');
        this.cnt = 1;
        this.time = {
            hour: 0,
            min: 0,
            sec: 0
        };
        this.checkCnt = 1;
        this.nodeList = [];
        this.checkTime = 0;

        this
            .start
            .addEventListener('click', () => {
                this.main.classList.remove('main1');
                // this.main = document.querySelector('.main');
                this.main.classList.add('main');
                this.showGame();
                this.createNodeList();
                this.setBox();
                this.setTimer();
                this.timer.style.backgroundColor = "gray";
            })
    }
    showGame() {

        this.main.innerHTML = `<div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>`;
    }
    setBox() {
        const boxes = document.querySelectorAll('.box');
        while (true) {
            let idx = parseInt(Math.random() * 25);
            if (boxes[idx].innerHTML == "") {
                boxes[idx].innerHTML = this.cnt;
                this.cnt++;
            }
            if (this.cnt > 25) {
                break;
            }
        }
    }

    createNodeList() {
        const boxes = document.querySelectorAll('.box');
        this.nodeList = [];
        let count = 0;
        for (let i = 0; i < 5; i++) {
            let boxArr = [
                boxes[count],
                boxes[count + 1],
                boxes[count + 2],
                boxes[count + 3],
                boxes[count + 4]
            ];
            count += 5;
            this
                .nodeList
                .push(boxArr);
        }
        this
            .nodeList
            .forEach((boxes) => {
                boxes.forEach((box) => {
                    box.addEventListener('click', (e) => {
                        this.checkNumber(e.target);
                        this.gameEnd(this.time);
                    })
                })
            })
    }
    checkNumber(target) {
        if (parseInt(target.innerHTML) === this.checkCnt) {
            if (this.checkCnt > 25) {
                target.style.backgroundColor = "white";
            } else {
                target.innerHTML = `${this.cnt++}`
            }
            this.checkCnt++;
            target
                .classList
                .remove('blink');
        } else {
            this.showNextBox();
        }
    }
    showNextBox() {
        const boxes = document.querySelectorAll('.box');
        console.log(boxes[0].innerHTML == 1)
        boxes.forEach((box) => {
            if (box.innerHTML == this.checkCnt) {
                box
                    .classList
                    .add('blink');
            }
        })
    }
    gameEnd(time) {
        if (this.checkCnt > 5) {
            alert(`Game Clear! 기록 : ${time.hour}시간 ${time.min}분 ${time.sec}초`);
            clearTimeout(this.checkTime);
        }
    }
    setTimer() {
        this.checkTime = setInterval(() => {
            this.time.sec++;
            if (this.time.sec == 60) {
                this.time.min++;
                this.time.sec = 0;
            }
            if (this.time.min == 60) {
                this.time.hour++;
                this.time.min = 0;
            }
            this.timer.innerHTML = `${String(this.time.hour).padStart(2, "0")}:${String(
                this.time.min
            ).padStart(2, "0")}:${String(this.time.sec).padStart(2, "0")}`
        }, 1000);
    }

}
const newGame = new App();