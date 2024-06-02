let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","blue","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    // console.log("game started");
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});


function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash")
}, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level} `;

    //random btn choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    // console.log("current level",level);
    // let idx=level-1;

    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){

           setTimeout(levelUp ,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log("botton pressed");
    // console.log(this);
    let btn = this;
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress); 
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}