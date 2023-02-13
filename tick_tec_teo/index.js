class App {
    // 생성자 
    constructor(p1, p2) {
        this.nodeList = [];
        this.p1 = p1;
        this.p2 = p2;
        this.container = document.querySelector(".container");
        this.sBtn = document.querySelector("#start");
        this.off = document.querySelector(".off");
        this.turn = true;
        this.cnt = 0;
        this.win = false;
        this.sBtn.addEventListener("click", () => {
            this.showGame();
            this.createNodeList();
            this.turn = true;
            this.cnt = 0;
        })
    }
    createNodeList() {
        this.nodeList = [];
        const tds = document.querySelectorAll("td"); // [td,td,td,td,td,td,td,td,td]
        let cnt = 0;
        for (let i = 0; i < 3; i++) {
            let arr = [tds[cnt], tds[cnt + 1], tds[cnt + 2]];
            cnt += 3;
            this.nodeList.push(arr);
        }
        this.nodeList.forEach((tds) => {
            tds.forEach((td) => {
                td.addEventListener('click', (event) => {
                    this.playGame(event.target);
                })
            })
        })
    }
    playGame(td) {
        if (td.innerHTML != "") {
            return;
        }
        let player = this.turn == true ? this.p1 : this.p2;
        td.innerHTML = player.shape;
        td.classList.add(player.color);
        this.winCheck(player.shape);
        this.cnt += 1;
        if (this.cnt === 9) {
            setTimeout(() => {
                this.winShow();
            }, 300)
            return;
        }
        this.turn = !this.turn;
    }
    showGame() {
        this.container.innerHTML = `
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
    }
    // 0 0 1 1 2 2
    // 0 2, 1 1, 2 0
    // 0 0 0 1 0 2
    // 0 0 1 0 2 0 
    winCheck(text) {
        let cDown = 0;
        let cup = 0;
        for (let y = 0; y < 3; y++) {
            let yCnt = 0;
            let xCnt = 0;
            for (let x = 0; x < 3; x++) {
                let xText = this.nodeList[y][x].innerHTML;
                let yText = this.nodeList[x][y].innerHTML;
                if (text === xText) {
                    xCnt++;
                    if (x == y) {
                        cDown++;
                    }
                }
                if (text === yText) {
                    yCnt++;
                    if (x == 3 - y - 1) {
                        cup++;
                    }
                }
                if (yCnt === 3 || xCnt === 3 || cDown === 3 || cup === 3) {
                    setTimeout(() => {
                        this.winShow();
                    }, 300)
                    return;
                }
            }
        }
    }
    winShow() {
        let player = this.turn == false ? this.p1 : this.p2;
        this.container.innerHTML = "";
        this.off.classList.remove("off");
        // 게임 메서지 활성화 
        this.off.classList.add("active");
        if (this.cnt === 9) {
            this.off.innerHTML = ` 무승부 게임종료!`;
        } else {
            this.off.innerHTML = `${player.name} 님이 게임 승리! <br> 게임종료`;
        }
        this.sBtn.innerHTML = "게임 다시시작";
        this.container.appendChild(this.off);
        this.container.appendChild(this.sBtn);
    }
}
class Player {
    constructor(name, color, shape) {
        this.name = name;
        this.color = color;
        this.shape = shape;
    }
}
const game = new App(new Player("핑크", "pink", "O"), new Player("블루", "blue", "X"));