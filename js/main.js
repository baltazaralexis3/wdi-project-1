/*----- constants -----*/ 

//player controls
// let pressRt = false;
// let pressLft = false;
// let pressDwn = false;

// let releaseRt = false;
// let releaseLft = false;
// let releaseDown = false;

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

/*----- app's state (variables) -----*/ 
var score = null;
var pieceInPlay;
var time;
var gameInProgress = false;
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 
/*----- functions -----*/


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
}


let Brk2 = new brk(8, 0, 0, 1.5, 5);





function animate() {

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, boardWidth, boardHt);
    Brk2.drawBrk();
    Brk2.fall();
  }
  animate();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  window.addEventListener('load', init);