let userScore = 0 ;
let compScore = 0 ;

const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div 	 = document.querySelector(".result");
const rock_div       = document.getElementById("r");
const paper_div      = document.getElementById("p");
const scissors_div   = document.getElementById("s");

function getcomputerChoice() {
	const choices = [ "r" , "p" , "s"];
	const randomNumbers = Math.floor(Math.random() * 3);
	return choices[randomNumbers];
}

function convertCase(word) {
	if (word === "r") return "Rock" ;
	if (word === "p") return "Paper";
	return "Scissors" ;
}

function win(user , computer) {
	userScore++;
	userScore_span.innerHTML = userScore ;
	const userName = '(user)'.fontsize(3).sub();
	const compName = '(comp)'.fontsize(3).sub();
	result_div.innerHTML = `<p> ${convertCase(user)}${userName} beats ${convertCase(computer)}${compName} You Win!</p>`;
	const roundStatus =  document.getElementById("user");
	roundStatus.classList.add('winningStyles');
	setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}

function lose(user , computer) {
	compScore++ ;
	compScore_span.innerHTML = compScore ;
	const userName = '(user)'.fontsize(3).sub();
	const compName = '(comp)'.fontsize(3).sub();
	result_div.innerHTML = `<p> ${convertCase(user)}${userName} beats ${convertCase(computer)}${compName} You Lose! </p>`;
	const roundStatus = document.getElementById(user);
	roundStatus.classList.add('losingStyles');
	setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
	
}

function draw(user , computer) {
	const userName = '(user)'.fontsize(3).sub();
	const compName = '(comp)'.fontsize(3).sub();
	result_div.innerHTML = `<p>It was a draw! You both chose ${convertCase(user)}</p>`;
	const roundStatus = document.getElementById(user);
	roundStatus.classList.add('drawStyles');
	setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}


function game(userChoice) {
	const computerChoice = getcomputerChoice();
	switch (userChoice + computerChoice) {
		
		case "pr" :
		case "rs" :
		case "sp" :
			win(userChoice , computerChoice);
			break;
			
		case "rp" :
		case "sr" :
		case "ps" :
			lose(userChoice , computerChoice);
			break;
		
		case "rr" : 
		case "pp" :
		case "ss" :
			draw(userChoice , computerChoice);
			break;
			
	}
}

function main() {
	rock_div.addEventListener('click', () => game('r'));
	paper_div.addEventListener('click', () => game('p'));
	scissors_div.addEventListener('click', () => game('s'));
	
}

main ();
