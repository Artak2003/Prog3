
var LiveForm = require("./LiveForm");
var random = require("./random.js");



module.exports = class Bomba extends LiveForm {
    constructor(x, y) {
        super(x, y);
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
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 
    traqoc(){
        let emptyCells1 = this.chooseCell(1);
        let emptyCells2 = this.chooseCell(2);
        let emptyCells3 = this.chooseCell(3);
        let emptyCells4 = this.chooseCell(4);
        let emptyCells5 = this.chooseCell(5);

        if(emptyCells1){
            emptyCells1[0] = 0;
            emptyCells1[1] = 0;
        }
        if(emptyCells2){
            emptyCells1[0] = 0;
            emptyCells1[1] = 0;
        }
        if(emptyCells3){
            emptyCells1[0] = 0;
            emptyCells1[1] = 0;
        }
        if(emptyCells4){
            emptyCells1[0] = 0;
            emptyCells1[1] = 0;
        }
        if(emptyCells5){
            emptyCells1[0] = 0;
            emptyCells1[1] = 0;
        }
    }
}
