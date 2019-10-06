let matrix = [];
let side = 15;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let amenakerArr = [];
let doktorArr = [];

function setup() {
    matrixGenerator(40, 120, 20, 10, 10, 3);
    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            if(matrix[y][x] == 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator);
            }
            if(matrix[y][x] == 4) {
                let amenaker = new Amenaker(x, y);
                amenakerArr.push(amenaker);
            }
            if(matrix[y][x] == 5) {
                let doktor = new Doktor(x, y);
                doktorArr.push(doktor);
            }
        }
    }
    function matrixGenerator(matrixSize, grass, grassEater,predator,amenaker,doktor) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let customX = Math.floor(random(0, matrixSize)); // 0 - 49
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 2;
        }
        for (let i = 0; i < predator; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 3;
        }
        for (let i = 0; i < amenaker; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 4;
        }
        for (let i = 0; i < doktor; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 5;
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            rect(x * side, y * side, side, side);
        }
    }

    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in amenakerArr) {
        amenakerArr[i].eat();
    }
    for (var i in doktorArr) {
        doktorArr[i].eat();
    }

    let k  = 0;
    for (let a = 0; a < matrix.length; a++) {
        for (let b = 0; b < matrix[a].length; b++) {
            if (matrix[a][b] == 1) {
                k++
            }
        }
    }
    if (k == 1600) {
        // G
        matrix[20][10] = 4;
        matrix[20][11] = 4;
        matrix[21][11] = 4;
        matrix[22][11] = 4;
        matrix[22][10] = 4;
        matrix[22][9] = 4;
        matrix[22][8] = 4;
        matrix[21][8] = 4;
        matrix[20][8] = 4;
        matrix[19][8] = 4;
        matrix[18][8] = 4;
        matrix[18][9] = 4;
        matrix[18][10] = 4;
        matrix[18][11] = 4;
        // A
        matrix[22][13] = 4;
        matrix[21][13] = 4;
        matrix[20][13] = 4;
        matrix[19][13] = 4;
        matrix[18][13] = 4;
        matrix[18][14] = 4;
        matrix[18][15] = 4;
        matrix[18][16] = 4;
        matrix[19][16] = 4;
        matrix[20][16] = 4;
        matrix[21][16] = 4;
        matrix[22][16] = 4;
        matrix[20][14] = 4;
        matrix[20][15] = 4;
        // M
        matrix[22][18] = 4;
        matrix[21][18] = 4;
        matrix[20][18] = 4;
        matrix[19][18] = 4;
        matrix[18][18] = 4;
        matrix[19][19] = 4;
        matrix[19][20] = 4;
        matrix[18][21] = 4;
        matrix[22][21] = 4;
        matrix[21][21] = 4;
        matrix[20][21] = 4;
        matrix[19][21] = 4;
        // E
        matrix[22][26] = 4;
        matrix[22][25] = 4;
        matrix[22][24] = 4;
        matrix[22][23] = 4;
        matrix[21][23] = 4;
        matrix[20][23] = 4;
        matrix[19][23] = 4;
        matrix[18][23] = 4;
        matrix[18][24] = 4;
        matrix[18][25] = 4;
        matrix[18][26] = 4;
        matrix[20][24] = 4;
        matrix[20][25] = 4;
        matrix[20][26] = 4;
        // O
        matrix[25][8] = 4;
        matrix[25][9] = 4;
        matrix[25][10] = 4;
        matrix[25][11] = 4;
        matrix[26][11] = 4;
        matrix[27][11] = 4;
        matrix[28][11] = 4;
        matrix[29][11] = 4;
        matrix[29][10] = 4;
        matrix[29][9] = 4;
        matrix[29][8] = 4;
        matrix[28][8] = 4;
        matrix[27][8] = 4;
        matrix[26][8] = 4;
        // V
        matrix[25][13] = 4;
        matrix[26][13] = 4;
        matrix[27][13] = 4;
        matrix[28][14] = 4;
        matrix[29][14] = 4;
        matrix[29][15] = 4;
        matrix[28][15] = 4;
        matrix[27][16] = 4;
        matrix[26][16] = 4;
        matrix[25][16] = 4;
        // E
        matrix[25][21] = 4;
        matrix[25][20] = 4;
        matrix[25][19] = 4;
        matrix[25][18] = 4;
        matrix[26][18] = 4;
        matrix[27][18] = 4;
        matrix[28][18] = 4;
        matrix[29][18] = 4;
        matrix[29][19] = 4;
        matrix[29][20] = 4;
        matrix[29][21] = 4;
        matrix[27][19] = 4;
        matrix[27][19] = 4;
        matrix[27][20] = 4;
        matrix[27][21] = 4;
        // R
        matrix[29][23] = 4;
        matrix[28][23] = 4;
        matrix[27][23] = 4;
        matrix[26][23] = 4;
        matrix[25][23] = 4;
        matrix[25][24] = 4;
        matrix[25][25] = 4;
        matrix[25][26] = 4;
        matrix[26][26] = 4;
        matrix[27][26] = 4;
        matrix[27][25] = 4;
        matrix[27][24] = 4;
        matrix[28][24] = 4;
        matrix[28][25] = 4;
        matrix[29][25] = 4;
        matrix[29][26] = 4;
    }
    else if (k != 1600) {
        k = 0;
    }
}






