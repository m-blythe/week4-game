/* ==========Testing that the javascript file is linked properly =============*/
/* ================document.write("Hello World!"); ===========================*/

/* ===============setting global variables =============================*/
var playerScore = 0;
var gameScore = 0;
var wins = 0;
var losses = 0;

/* ================ random game score generated  between 19 and 120 ========================= */
function rdnGameScore() {
     gameScore = 19 + Math.floor(Math.random() * 120);
    console.log(gameScore);
}

rdnGameScore();

/* =============assign a random value between 1 and 12 to each image ======================*/
var pink_gem = 1 + Math.floor(Math.random() * 12);
var blue_gem = 1 + Math.floor(Math.random() * 12);
var green_gem = 1 + Math.floor(Math.random() * 12);
var purple_gem = 1 + Math.floor(Math.random() * 12);

/* ================== reset function when game is over=====================*/
function reset(){
    playerScore = 0;
    gameScore = 0;
    gameScore = 19 + Math.floor(Math.random() * 120);
    pink_gem = 1 + Math.floor(Math.random() * 12);
    blue_gem = 1 + Math.floor(Math.random() * 12);
    green_gem = 1 + Math.floor(Math.random() * 12);
    purple_gem = 1 + Math.floor(Math.random() * 12);
}

/*=================when a user clicks on a gem, the value is added to playerScore===============*/
$("pink").on("click", function() {
    playerScore = playerScore + pink_gem;
    console.log(playerScore);
 /*The value is supposed to update the player score */
}
)

$("blue").on("click", function() {
    playerScore = playerScore + blue_gem;
    console.log(playerScore);
    /*The value is supposed to update the player score */
}
)

$("green").on("click", function() {
    playerScore = playerScore + green_gem;
    console.log(playerScore);
    /*The value is supposed to update the player score */
}
)

$("purple").on("click", function() {
    playerScore = playerScore + purple_gem;
    console.log(playerScore);
    /*The value is supposed to update the player score */
}
)

/*================================caculate if the player wins or loses ==================*/
if (playerScore == gameScore) {
    wins++;
    reset();
}
else {
    losses++;
    reset();
}
