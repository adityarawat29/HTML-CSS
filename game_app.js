let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span =  document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div =  document.getElementById("s");

function getComputerChoice() {
    const choices = ["r" , "p" , "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice , computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore ;
    compScore_span.innerHTML = compScore ;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} Beats ${convertToWord(computerChoice)}${smallCompWord}.You Win!`;
}

function lose(userChoice , computerChoice){
    compScore++;
    userScore_span.innerHTML = userScore ;
    compScore_span.innerHTML = compScore ;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} Loses ${convertToWord(computerChoice)}${(smallCompWord)}.You Lose!`;
}

function draw(userChoice , computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} Draw ${convertToWord(computerChoice)}${smallCompWord}.Its a Draw!`;
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rp" :
        case "pr" :
        case "sp" :
            win(userChoice , computerChoice);
        break;

        case "rp" :
        case "ps" :
        case "sr" :
            lose(userChoice , computerChoice);
        break;
        
        case "rr" :
        case "pp" :
        case "ss" :
            draw(userChoice , computerChoice);
         break;   
    }
}

function main () {
    rock_div,addEventListener('click', function() {
    game("r");
    })

    paper_div.addEventListener('click', function() {
    game("p");
    })


    scissor_div.addEventListener('click', function() {
    game("s");    
    })
}

main();
