class Doktor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.puls = 200;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;


            let doktor = new Doktor(x, y);
            doktorArr.push(doktor);


            this.puls = 200;
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
        this.puls--;

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
        if (this.puls < 0) {
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