// rock paper scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const rockCom = document.getElementById("rock-com");
const paperCom = document.getElementById("paper-com");
const scissorsCom = document.getElementById("scissors-com");
const robotui = document.getElementById("robotui");
const win = "ALRIGHT... YOU WON...";
const lose = "HAHAHAHA! I WON";
const tie = "IT'S A TIE!";



function playGame(playerChoice){

	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result = "";

	if(playerChoice === computerChoice){
		robotui.innerHTML = "<img src='robotdefault.png'>";
		result = tie;
	}else{
		switch(playerChoice){
			case "rock":
				result = (computerChoice === "scissors") ? win : lose;
				break;
			case "paper":

				result = (computerChoice === "rock") ? win : lose;
				break;
			case "scissors":
				result = (computerChoice === "paper") ? win : lose;
				break;
		}
	}

	resultDisplay.textContent = result;

	rockCom.classList.remove("chosen");
	paperCom.classList.remove("chosen");
	scissorsCom.classList.remove("chosen");
	rockCom.innerHTML = "<img src='rockCD.png'>";
	paperCom.innerHTML = "<img src='paperCD.png'>";
	scissorsCom.innerHTML = "<img src='scissorsCD.png'>";

	switch(computerChoice){
		case "rock":
			rockCom.innerHTML = "<img src='rockCC.png'>";
			rockCom.classList.add("chosen");
			break;
		case "paper":
			paperCom.innerHTML = "<img src='paperCC.png'>";
			paperCom.classList.add("chosen");
			break;
		case "scissors":
			scissorsCom.innerHTML = "<img src='scissorsCC.png'>";
			scissorsCom.classList.add("chosen");
			break;
	}

	resultDisplay.classList.remove("greenText", "redText");

	switch(result){
		case win:
			robotui.innerHTML = "<img src='robotsad.png'>";
			resultDisplay.classList.add("greenText");
			break;
		case lose:
			robotui.innerHTML = "<img src='robothappy.png'>";
			resultDisplay.classList.add("redText");
			break;
	}

}

