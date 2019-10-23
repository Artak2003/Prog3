var LiveForm = require("./LiveForm");
var random = require("./random.js");



module.exports = class Doktor extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.puls = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            doktorHashiv++
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;


            let doktor = new Doktor(x, y);
            doktorArr.push(doktor);


            this.puls = 1;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(4);
        let newCell = random(emptyCells);

        if (newCell) {
            this.puls++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            for (let i in amenakerArr) {
                if (amenakerArr[i].x == x && amenakerArr[i].y == y) {
                    amenakerArr.splice(i, 1)
                }
            }

            this.x = x;
            this.y = y;

            if (this.puls >= 300) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.puls-5;

        let emptyCells1 = this.chooseCell(0)
        let emptyCells2 = this.chooseCell(1)
        let emptyCells3 = this.chooseCell(2)
        let emptyCells4 = this.chooseCell(3)
        let newCell = random(emptyCells1.concat(emptyCells2).concat(emptyCells3).concat(emptyCells4));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            for (let i in predatorArr) {
                if (predatorArr[i].x == x && predatorArr[i].y == y) {
                    predatorArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;
        }
        if (this.puls <= 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in doktorArr) {
            if (doktorArr[i].x == this.x && doktorArr[i].y == this.y) {
                doktorArr.splice(i, 1)
            }
        }
    }
}