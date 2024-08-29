let maxScore=document.querySelector("#maxScore");
let btnPlayer1=document.querySelector("#btnPlayer1");
let btnPlayer2=document.querySelector("#btnPlayer2");
let reset=document.querySelector("#reset");
let player1Score=0,player2Score=0;

btnPlayer1.addEventListener("click",()=>{
    player1Score++;
    document.querySelector("#player1").innerText=player1Score;
    if(player1Score==maxScore.value){
        document.querySelector("#player1").style.color="green";
        document.querySelector("#player2").style.color="red";
        let winnerDisplay=document.createElement("h4");
        document.querySelector("#options").insertAdjacentElement("afterend",winnerDisplay);
        winnerDisplay.innerText="Player 1 is the winner !!!";
        winnerDisplay.setAttribute("id","winnerDisplay");
        btnPlayer1.disabled=true;
        btnPlayer2.disabled=true;
    }
});

btnPlayer2.addEventListener("click",()=>{
    player2Score++;
    document.querySelector("#player2").innerText=player2Score;
    if(player2Score==maxScore.value){
        document.querySelector("#player2").style.color="green";
        document.querySelector("#player1").style.color="red";
        let winnerDisplay=document.createElement("h4");
        document.querySelector("#options").insertAdjacentElement("afterend",winnerDisplay);
        winnerDisplay.setAttribute("id","winnerDisplay");
        winnerDisplay.innerText="Player 2 is the winner !!!";
        btnPlayer1.disabled=true;
        btnPlayer2.disabled=true;
    }
});

reset.addEventListener("click",()=>{
    document.querySelector("h4").remove();
    player1Score=0;
    player2Score=0;
    document.querySelector("#player1").innerText="0";
    document.querySelector("#player2").innerText="0";
    document.querySelector("#player2").style.color="black";
    document.querySelector("#player1").style.color="black";
    btnPlayer1.disabled=false;
    btnPlayer2.disabled=false;
});
