//! Requiring modules  --  START
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Predator = require("./modules/Amenaker.js");
var Amenaker = require("./modules/Predator.js");
var Doktor = require("./modules/Doktor.js");
var Vaxkot = require("./modules/Vaxkot.js");
let random = require('./modules/random.js');
//! Requiring modules  --  END

//! Initializing global arrays  --  START
grassArr = [];
grassEaterArr = [];
predatorArr = [];
amenakerArr = [];
doktorArr = [];
vaxkotArr = [];
matrix = [];
//! Initializing global arrays  --  END

// statistics start
grassHashiv = 0;
grassEaterHashiv = 0;
predatorHashiv = 0;
amenakerHashiv = 0;
doktorHashiv = 0;
vaxkotHashiv = 0;
// statistics end

// time = 0
//! Creating MATRIX -- START

function matrixGenerator(matrixSize, grass, grassEater, predator, amenaker, doktor, vaxkot) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < predator; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < amenaker; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < doktor; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < vaxkot; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
}
matrixGenerator(20, 15, 50, 15, 10, 2, 30);
//! Creating MATRIX -- END

//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END

function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                predatorArr.push(predator);
                predatorHashiv++
            }
            else if (matrix[y][x] == 4) {
                var amenaker = new Amenaker(x, y);
                amenakerArr.push(amenaker);
                amenakerHashiv++
            }
            else if (matrix[y][x] == 5) {
                var doktor = new Doktor(x, y);
                doktorArr.push(doktor);
                doktorHashiv++
            }
            else if (matrix[y][x] == 6) {
                var vaxkot = new Vaxkot(x, y);
                vaxkotArr.push(vaxkot);
                vaxkotHashiv++
            }
        }
    }
}

creatingObjects();

let exanak = 0;
let weather = "winter"

function game() {

    exanak++;
    if (exanak <= 5){
        weather = "summer"
    }else if (exanak <= 10){
        weather = "autumn"
    }else if (exanak <= 15){
        weather = "winter"
    }else if (exanak <= 20){
        weather = "spring"
    }else if (exanak > 20){
        exanak = 0
    }


    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (predatorArr[0] !== undefined) {
        for (var i in predatorArr) {
            predatorArr[i].eat();
        }
    }
    if (amenakerArr[0] !== undefined) {
        for (var i in amenakerArr) {
            amenakerArr[i].eat();
        }
    }
    if (doktorArr[0] !== undefined) {
        for (var i in doktorArr) {
            doktorArr[i].eat();
        }
    }
    if (vaxkotArr[0] !== undefined) {
        for (var i in vaxkotArr) {
            vaxkotArr[i].move();
        }
    }
    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,
        grassEaterCounter: grassEaterHashiv,
        grassEaterLiveCounter: grassEaterArr.length,
        predatorCounter: predatorHashiv,
        predatorLiveCounter: predatorArr.length,
        amenakerCounter: amenakerHashiv,
        amenakerLiveCounter: amenakerArr.length,
        doktorCounter: doktorHashiv,
        doktorLiveCounter: doktorArr.length,
        vaxkotCounter: vaxkotHashiv,
        vaxkotLiveCounter: vaxkotArr.length,
        weather: weather
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)