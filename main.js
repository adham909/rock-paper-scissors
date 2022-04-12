let buttons = document.querySelectorAll('.pick');
let scoreEl = document.getElementById("score");
let main = document.getElementById("main");
let selection = document.getElementById("selection");
let reset = document.getElementById("reset");
let userSelect = document.getElementById("user-select");
let computerSelect = document.getElementById("computer-select");
let statue = document.getElementById("statue");
let open = document.getElementById("open");
let close = document.getElementById("close");
let rulesModal = document.getElementById("rules-modal");



let choices = ['rock' , 'paper' , 'scissors'];

let score = 0;
let userChoice = undefined;


buttons.forEach(button =>{
    button.addEventListener('click' , ()=>{
      userChoice =  button.getAttribute('data-choice');
      console.log(userChoice);
      checkWinner();
    })
});

function checkWinner(){
    const computerChoice = getRandomChoice();

    UpdateSelection(userSelect , userChoice);
    UpdateSelection(computerSelect , computerChoice);

    if(userChoice===computerChoice){
        // draw
        statue.innerText = "draw";
        statue.style.color = "#99b6bb";

    }else if(userChoice === "paper" && computerChoice === "rock" ||
            userChoice === "rock" && computerChoice === "scissors"||
            userChoice ==="scissors" && computerChoice === "paper")
            {
                // user win
                updateScore(1);
                statue.innerText = "win";
                statue.style.color = "#3aed0d";
        }
    else{
        // user lose
        updateScore(-1);
        statue.innerText = "lose";
        statue.style.color = "#d91717";
    }

    main.style.display = 'none';
    selection.style.display = 'flex';
}

reset.addEventListener("click" , ()=>{
    selection.style.display = 'none';
    main.style.display = 'flex';
})

function updateScore(value){
    score += value;
    scoreEl.innerText = score;
}

function getRandomChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}

function UpdateSelection(selectionEl , choice){
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `images/icon-${choice}.svg`;
    img.alt = choice;
}

open.addEventListener("click" , ()=>{
    rulesModal.classList.add("show")
});

close.addEventListener("click" , ()=>{
    rulesModal.classList.remove("show")
})
