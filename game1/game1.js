const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false; //bord slot
let firstCard, secondCard;

/*--------------------------------------------------------------------------------------------------------*/

let player1 = document.getElementById('player1points');
let player1pointscore = 0;
let player2 = document.getElementById('player2points');
let player2pointscore = 0;

/*--------------------------------------------------------------------------------------------------------*/
// met deze code kunnen beide spelers hun naam invoeren
var player1getname = prompt("Player1 enter name:");
var player2getname = prompt("Player2 enter name:");
var player1name = document.getElementById('player1name');
var player2name = document.getElementById('player2name');

/*--------------------------------------------------------------------------------------------------------*/
var turnCount = 0;
var winner = null;
var playerbeurt = null;

/*--------------------------------------------------------------------------------------------------------*/
// aanroep van elementen
var thewinner = document.getElementById("thewinner");
var aanbeurt = document.getElementById("aanbeurt");
var cardvisibility = document.getElementById("cardvisibility");

/*--------------------------------------------------------------------------------------------------------*/
// laat ingevoerde namen zien
player1name.innerHTML = player1getname;
player2name.innerHTML = player2getname;

/*--------------------------------------------------------------------------------------------------------*/
// deze functie zorgt ervoor dt de kaarten flippen en de return zorgt ervoor dat de functie stopt.
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}

/*--------------------------------------------------------------------------------------------------------*/
// deze functie zoekt voor de matchende kaarten
function checkForMatch() {
    let isMatch
    if ( isMatch = firstCard.dataset.framework === secondCard.dataset.framework) {
        playerscore();
    }

    isMatch ? disableCards() : unflipCards();
}

/*--------------------------------------------------------------------------------------------------------*/
//deze functie zorgt ervoor dat de kaarten die gematched zijn niet meer terug geflipped kunnen worden.
//En reset het bord
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

/*--------------------------------------------------------------------------------------------------------*/
/*deze fucntiezorgt ervoor dat als 2 kaarten geflipped zijn en er geen match gevonden is dat ze dan weer
terug geflipped worden*/
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000); // timer voor de kaarten om terug te switchen

    beurt();
}
/*--------------------------------------------------------------------------------------------------------*/
//reset het hele bord
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    firstCard = null
    secondCard = null
}

/*--------------------------------------------------------------------------------------------------------*/
(function randomize() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 24);
        card.style.order = randomPos;
    });
})();

/*--------------------------------------------------------------------------------------------------------*/
function beurt() {
    turnCount++
    if (turnCount % 2) {
        playerbeurt = player2getname + " is aan de beurt";
    }
    else {
        playerbeurt = player1getname + " is aan de beurt";
    }
    aanbeurt.innerHTML = playerbeurt;
}

/*--------------------------------------------------------------------------------------------------------*/
function playerscore() {
    if (turnCount % 2) {
        player2pointscore +=1;
        player2.innerHTML = player2pointscore;
    }
    else  {
        player1pointscore +=1;
        player1.innerHTML = player1pointscore;
    }
    endgame();
}

/*--------------------------------------------------------------------------------------------------------*/
//als beide spelers bij elkaar opgeteld meer dan 10 punten hebben, laat het de winnaar zien of wanneer
// het puntenverschil 6 is.
function endgame() {
        if(player1pointscore - player2pointscore == 6) {
            showwinner();
        }
        if (player2pointscore - player1pointscore == 6) {
            showwinner();
        }
        if (player1pointscore + player2pointscore > 10) {
        showwinner();
        }
}

/*--------------------------------------------------------------------------------------------------------*/
//maakt het winnaar vakje zichtbaar met de naam van de winnaar
function showwinner() {
    if (player1pointscore > player2pointscore) {
        winner = player1getname + " is de WINNAAR !!!";
    }
    else if ((player1pointscore < player2pointscore)){
        winner = player2getname + " is de Winnaar !!!";
    }
    else {
        winner = "Gelijk Spel!!";
    }
    thewinner.innerHTML = winner;
    thewinner.style.visibility = 'visible'
    debeurt.style.visibility = 'hidden'
    restartgamebutton.style.visibility = 'visible'
    cardvisibility.style.visibility = 'hidden'
}

/*--------------------------------------------------------------------------------------------------------*/
cards.forEach(card => card.addEventListener('click', flipCard));
/*--------------------------------------------------------------------------------------------------------*/