
function game(){

    function userPick(){//User picks

        let userPickString = prompt("Best of 5: rock, paper, or scissors?").toLowerCase();
        /* To check if player picks rock, paper, or scissors
        DOES NOT WORK
        if (userPickString === "rock" || userPickString === "paper" || userPickString ==="scissors"){
            console.log(userPickString);
            return userPickString;
        }
        else{
            console.log("wrong answer");
            userPick();
        }
        */
        return userPickString;
        //console.log(userPickString);
    }

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
    //console.log(computerPlay());
    let userPlay= userPick();
    //console.log(userPlay+"-user")
    let computerPlay=computerPick();
    //console.log(computerPlay+"-computer");

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

for(let round=1; wins<3 && losses<3; round++){

    results= game();
    console.log(`You ${results[0]}`);
    
    if (results[0]==="win"){
        console.log(`${results[1]} beats ${results[2]}`)
        wins++
    }
    else if (results[0]==="lose"){
        console.log(`${results[2]} beats ${results[1]}`)
        losses++
    }
    console.log(`round ${round} | wins:${wins} losses:${losses}`)
}

if(wins>losses){
    console.log(`You win ${wins} to ${losses}`)
}
else{
    console.log(`you lose ${losses} to ${wins}`)
}

