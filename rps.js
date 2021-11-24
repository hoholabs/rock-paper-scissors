
function game(usrPick){
    /*
    function userPick(){//User picks

        let userPickString = prompt("Best of 5: rock, paper, or scissors?").toLowerCase();

        return userPickString;
        //console.log(userPickString);
    }
    */
    function computerPick(){ //computer chooses rock paper or scissors
        computerPickNumber = Math.floor((Math.random()*100)/33.3);
        if(computerPickNumber===0){
            return "rock";
        }
        else if(computerPickNumber===1){
            return "paper";
        }
        else{
            return "scissors";
        }
    }
    let userPlay= usrPick;
    console.log(userPlay+"-user")
    let computerPlay=computerPick();
    console.log(computerPlay+"-computer");

    if(userPlay===computerPlay){//declare a tie
        //console.log("TIE!")
        return ["tie", userPlay, computerPlay];
    }

    else if(userPlay==="rock"){//user plays rock
        if(computerPlay==="paper"){
            //console.log("You lose, paper beats rock");
            return ["lose", userPlay, computerPlay];
        }
        else{
            //console.log("You win, rock beats scissors");
            return ["win", userPlay, computerPlay];
        }
    }

    else if(userPlay==="paper"){//user plays paper
        if(computerPlay==="scissors"){
            //console.log("You lose, scissors beats paper");
            return ["lose", userPlay, computerPlay]
        }
        else{
            //console.log("You win, paper beats rock");
            return ["win", userPlay, computerPlay];
        }
    }

    else if(userPlay==="scissors"){//user plays scissors
        if(computerPlay==="rock"){
            //console.log("You lose, rock beats scissors");
            return ["lose", userPlay, computerPlay];
        }
        else{
            //console.log("You win, scissors beats paper");
            return ["win", userPlay, computerPlay];
        }
    }
}
//play();
//console.log(play()[1])
let wins=0;
let losses=0;
let round=1;

const resultsDisplay = document.querySelector('#resultsDisplay');
const scoreDisplay = document.querySelector('#scoreDisplay');

//for(let round=1; wins<3 && losses<3; round++){
function playGame(pick){
    results= game(pick);
    //console.log(`You ${results[0]}`);
    
    if (results[0]==="win"){
        resultsDisplay.textContent=`You ${results[0]}, ${results[1]} beats ${results[2]}`
        wins++
    }
    else if (results[0]==="lose"){
        resultsDisplay.textContent=`You ${results[0]}, ${results[2]} beats ${results[1]}`
        losses++
    }
    else if (results[0]==="tie"){
        resultsDisplay.textContent="You tied!"
    }
    scoreDisplay.textContent=`round ${round} | wins:${wins} losses:${losses}`
    round++

    if(wins+losses==5 && wins>losses){
        alert(`You win ${wins} to ${losses}`);
        wins=0;
        losses=0;
        round=1;
        scoreDisplay.textContent= "Round 1 | Fight!"
        resultsDisplay.textContent="Rock, Paper, Scissors, Shoot!"
    }
    if(wins+losses==5 && wins<losses){
        alert(`You lose ${losses} to ${wins}`);
        wins=0;
        losses=0;
        round=1;
        scoreDisplay.textContent= "Round 1 | Fight!"
        resultsDisplay.textContent="Rock, Paper, Scissors, Shoot!"
    }
}
