/*----- constants -----*/ 

//board
const boardArea = document.querySelector('#play');
const ctx = boardArea.getContext('2d');
const gridArea = document.querySelector('#grid');
const ctx2 = gridArea.getContext('2d');

const unit = 25;
const rows = 30;
const cols = 20;
const boardWidth = boardArea.width;
const boardHt = boardArea.height;

const board = [];

const howto = document.querySelector('#instr');

const start = document.querySelector('#start');

/*----- app's state (variables) -----*/ 
var score = null;
var pieceInPlay;
var time;
var gameInProgress = false;
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 

//player controls

let pressRt = false;
let pressLft = false;
let pressDwn = false;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

howto.addEventListener('click', showInstr);

start.addEventListener('click', init);

/*----- functions -----*/

function keyDownHandler(evt) {
    if (evt.keyCode == 39) {
        pressRt = true;
    } else if (evt.keyCode == 37) {
        pressLft = true;
    } else if (evt.keyCode == 40) {
        pressDwn = true;
    }
}

function keyUpHandler(evt) {
    if (evt.keyCode == 39) {
        pressRt = false;
    } else if (evt.keyCode == 37) {
        pressLft = false;
    } else if (evt.keyCode == 40) {
        pressDwn = false;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
function showInstr() {
    alert('Your objective is to make Beto run by building Trump’s border wall. As the bricks fall, use the arrow keys to move them around and make them fit together in complete rows. Get points by laying down as many complete rows of bricks as you can before the round is over! Don’t let the bricks pile up or the wall will fall over!');
}

function init() {}

function drawBoard() {
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            drawCell(col, row);
        }
    }
};

drawBoard();

function drawCell(x, y) {
    ctx2.fillStyle = '#FFF';
    ctx2.fillRect(x*unit, y*unit, unit, unit);
    ctx2.strokeStyle = 'rgb(66, 66, 66)';
    ctx2.strokeRect(x*unit, y*unit, unit, unit)
};

class brk {
    constructor(x, y, dx, dy, size) {
        this.x = x*unit;
        this.y = y*unit;
        this.dx = dx;
        this.dy = dy;
        this.size = getRandomInt(2, 5);
    }

    drawBrk() {
        ctx.fillStyle = '#901902';
        ctx.fillRect(this.x, this.y, this.size*unit, unit);
        ctx.strokeStyle = '#ffeebb';
        ctx.strokeRect(this.x, this.y, this.size*unit, unit);
    }

    fall() {
        if (this.y < 29*unit) {
        this.y += this.dy;
        }
    }

    move() {
        if (this.y < 29*unit) {
        if (pressRt && this.x < 500 - this.size*unit) {
            this.x += 1;
        } else if (pressLft && this.x > 0) {
            this.x -= 1;
        } else if (pressDwn) {
            this.y += 1;
        } 
    }
    }

}


let Brk2 = new brk(8, 0, 0, 1);


function animate() {

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, boardWidth, boardHt);
    Brk2.drawBrk();
    Brk2.fall();
    Brk2.move();
  }
  animate();

  



//   window.addEventListener('load', init);