/*----- constants -----*/ 
const oBrk = [
    [0,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
];
const iBrk = [
    [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
    ],
    [
        [0,0,0,0],
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0]
    ],
    [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0]
    ],
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0],
    ]
];
const tBrk = [
    [
        [0,0,0],
        [1,1,1],
        [0,1,0]
    ],
    [
        [0,1,0],
        [0,1,1],
        [0,1,0]
    ],
    [
        [0,1,0],
        [1,1,1],
        [0,0,0]
    ],
    [
        [0,1,0],
        [1,1,0],
        [0,1,0]
    ]
];
const sBrk = [
    [
        [0,1,1],
        [1,1,0],
        [0,0,0]
    ],
    [
        [1,0,0],
        [1,1,0],
        [0,1,0]
    ],
    [
        [0,0,0],
        [0,1,1],
        [1,1,0]
    ],
    [
        [0,1,0],
        [0,1,1],
        [0,0,1]
    ]
];
const zBrk = [
    [
        [1,1,0],
        [0,1,1],
        [0,0,0]
    ],
    [
        [0,0,1],
        [0,1,1],
        [0,1,0]
    ],
    [
        [1,1,0],
        [0,1,1],
        [0,0,0]
    ],
    [
        [0,1,0],
        [1,1,0],
        [1,0,0]
    ]

];
const lBrk = [
    [
        [0,1,0],
        [0,1,0],
        [0,1,1]
    ],
    [
        [0,0,1],
        [1,1,1],
        [0,0,0]
    ],
    [
        [1,1,0],
        [0,1,0],
        [0,1,0]
    ],
    [
        [0,0,0],
        [1,1,1],
        [1,0,0]
    ]
];
const jBrk = [
    [
        [0,1,0],
        [0,1,0],
        [1,1,0]
    ],
    [
        [0,0,0],
        [1,1,1],
        [0,0,1],
    ],
    [
        [0,1,1],
        [0,1,0],
        [0,1,0]
    ],
    [
        [1,0,0],
        [1,1,1],
        [0,0,0]
    ]
];

const boardArea = document.querySelector('canvas');
const ctx = boardArea.getContext('2d');

const unit = 25;
const rows = 30;
const cols = 20;

const vac = '#FFF';
const board = [];
for (var row = 0; row < rows; row++) {
    board[row] = [];
    for (var col = 0; col < cols; col++) {
        board[row][col] = vac;
    }
};



/*----- app's state (variables) -----*/ 
var score;
var brkInPlay;
var nxtBrk;
var time;
var roundActive;
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 
/*----- functions -----*/

function drawBoard() {
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            drawCell(col, row, board[row][col]);
        }
    }
};

drawBoard();

function drawCell(x, y) {
    ctx.fillStyle = '#FFF';
    ctx.fillRect(x*unit, y*unit, unit, unit);
    ctx.strokeStyle = 'rgb(66, 66, 66)';
    ctx.strokeRect(x*unit, y*unit, unit, unit)
};

drawBrk = function(x, y) {
    ctx.fillStyle = '#901902';
    ctx.fillRect(x*unit, y*unit, unit, unit);
    ctx.strokeStyle = '#ffeebb';
    ctx.strokeRect(x*unit, y*unit, unit, unit)
};

drawBrk(1,1);

function clear(x, y) {
    ctx.clearRect(x*unit, y*unit, unit, unit);
}

function mvRt() {
    drawBrk(x, y);
    // clear(x, y);
    // drawCell(x, y);
};

mvRt();


function mvLft() {};
function mvDwn() {};
function fall() {};

