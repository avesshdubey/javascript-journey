console.log("control flow")
// Students grade logic
let score = 98;
if (score > 90){
    console.log("Grade A");
} else if (score <= 90 && score > 70){
    console.log("Grade B");
} else if (score <= 70 && score > 50){
    console.log("Grade C");
} else if (score <= 50 && score > 30){
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// Rock-paper-scissors

function game(player1,player2){
    if(player1.toLowerCase() == player2.toLowerCase()) return "Draw";
    if (player1.toLowerCase() === "rock" && player2.toLowerCase() === "scissors") return "player1 win!";
    if (player1.toLowerCase() === "paper" && player2.toLowerCase() === "rock") return "player1 win!";
    if (player1.toLowerCase() === "scissors" && player2.toLowerCase() === "paper") return "player1 win!";
    return "player2 win!";
}

console.log(game("paper","scissors"));

// Login massage

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("welcome!, Admin");
} else if (isLoggedIn && !isAdmin){
    console.log("Welcome!, User");
} else {
    console.log("Something went's wrong.");
}

// Weather advice

let weather = "rainy";

switch (weather){
    case "hot":
        console.log("Protect yourself from sun!");
        break;
    case "winter":
        console.log("Wear warm clothes!")
        break;
    case "cloudy":
        console.log("Enjoy the weather!");
        break;
    case "rainy":
        console.log("Bring umbrella!");
        break;
    default:
        console.log("I can't identify.");
    
}
