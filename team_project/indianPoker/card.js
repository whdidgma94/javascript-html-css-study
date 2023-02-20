class Player {
    constructor(name) {
        this.name = name;
        this.shape = "";
        this.num = "";
        this.money = 10000;
        this.win = false;
    }
}
class Card {
    constructor(player) {
        this.shapes = ['♥', '♣'];
        this.makeCard(player);
    }

    makeCard(player) {
        let num = parseInt(Math.random() * 2 + 1);
        let shape = this.shapes[parseInt(Math.random() * 2)];
        player.num = num;
        if (num === 1) {
            num = 'A';
        }
        player.shape = shape;
        this.dealCard(player.name, player.shape, num);
    }

    dealCard(player, shape, num) {
        let card = "";
        if (player === 'me') {
            card = document.querySelector('.myCard');
        } else {
            card = document.querySelector('.comCard');
        }
        let cards = `<div class="card">
        <div class="cardTop1">${num}</div>
        <div class="cardTop2">${shape}</div>
        <div class="cardMid">${shape}</div>
        <div class="cardBot1">${shape}</div>
        <div class="cardBot2">${num}</div>
    </div>`;
        if (shape === '♥') {
            card.style.color = "red";
        } else {
            card.style.color = "black";
        }
        card.innerHTML = cards;
        card.style.visibility = "hidden";
    }
}
