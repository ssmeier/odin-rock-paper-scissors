
class gameRunner{
    
    getComputerChoice() {
        var choice = null;
        var value = Math.floor((Math.random() * 3) + 1);
        
        switch(value) {
            case 1:
                choice = "fire";
                break
            case 2:
                choice = "water";
                break
            case 3:
                choice = "grass";
                break
        }
        if (choice == null) {
            return console.error("CPU invalid selection");
            
        } 
        return choice
    }

    getPlayerChoice() {
        let playerPrompt = prompt("Would you like to choose fire, water, or grass?")
        let choice = null;
        switch(playerPrompt) {
            case "fire":
                choice = "fire";
                break
            case "water":
                choice = "water";
                break
            case "grass":
                choice = "grass";
                break
            default:
                break
        }
        return choice
    }

    playRound(playerChoice, cpuChoice) {
        let player = playerChoice;
        let cpu = cpuChoice;
        let score = null;

        console.log(cpu)

        switch(player) {
            case "fire":
                if(cpu == "fire") {
                    score = 0;
                    console.log("fire x fire")
                }
                else if(cpu == "water") {
                    score = -1;
                    console.log("water << fire")
                }
                else {
                    score = 1;
                    console.log("fire >> grass")
                }
                break
            case "water":
                if(cpu == "fire") {
                    score = 1;
                    console.log("water << fire")
                }
                else if (cpu == "water") {
                    score = 0;
                    console.log("water x water")
                }
                else {
                    score = -1;
                    console.log("grass << water")
                }
                break

            case "grass":
                if(cpu == "fire") {
                    score = -1;
                    console.log("fire << grass")
                }
                else if (cpu == "water") {
                    score = 1;
                    console.log("grass << water")
                }
                else {
                    score = 0;
                    console.log("grass x grass")
                }
                break
        }
    return score;
    }

    playFullGame(){
        let gameHistory = [];
        for(let i = 0; i < 5; i++){
           let playerSelection = this.getPlayerChoice();
           let computerSelection = this.getComputerChoice();
           let result = null;
           result = this.playRound(playerSelection,computerSelection);
           gameHistory.push(result)
        }
    console.log("Results!")
    let wins = 0; let ties = 0; let losses = 0;
        for (var round of gameHistory.values()) {
            switch(round) {
                case 0:
                    ties++;
                    break
                case -1:
                    losses++;
                    break
                case 1:
                    wins++;
            }

        }
    console.log("Wins! " + wins)  
    console.log("Ties! " + ties)    
    console.log("Losses! " + losses)    
    }
}

var GameRunner = new gameRunner;
GameRunner.playFullGame()
