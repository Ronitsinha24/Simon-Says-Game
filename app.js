let gameSeq =[]; 
let userSeq = [];

let btns = ["red" , "yellow" , "green" , "purple"];

let started = false;
let level = 0;
let highestScore = 0;


let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");


document.addEventListener("keypress" , () => {
    if (started == false) {
        console.log("game is started");
        started = true ;
        
        levelUp ();
    }
    
});

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random btn selection
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    
    gameSeq.push(ranColor);
    console.log(gameSeq)
    gameFlash(ranBtn);
};


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);

    
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}


function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    
}

function checkAns (idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
           setTimeout(levelUp,1000);
        }
    } else {
        highestScore = level;
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br
        >Press any key to start`;
        h3.innerHTML = `Highest score was ${highestScore}`;

        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
        document.querySelector("body").style.backgroundColor="burlywood";
        },150)
    }
}
function reset() {
    gameSeq=[];
    userSeq=[];
    level = 0;
    started = false;
}