let gameSeq=[];
let userSeq=[];
let level = 0;
let started = false;
let btns = ["red","yellow","green","blue"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }


});
function btnFlash (btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);


}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    // console.log(ranBtn);
    // console.log(ranIdx);
    // console.log(ranColor);

    gameSeq.push(ranColor);
    console.log(gameSeq);

    btnFlash(ranBtn);
}
function checkAns(idx){
    // console.log("level is :", `${level}`);
    // let idx = level-1;
    if(gameSeq[idx] == userSeq[idx]){
        if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
        }
        // console.log("same value");
    }else{
        h2.innerHTML = `Game over! your score was <b> ${level}</b>  <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor = "white"; 
        },500);
        reSet();
    }

}
function btnPress(){
    // console.log(this);
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reSet(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}