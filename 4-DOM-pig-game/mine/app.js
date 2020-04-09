/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


CHALLENGES:

Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

*/

var gamePlaying, scores, roundScore, activePlayer, dice, previousDice, winScore;
var diceDOM = document.querySelector('.dice');

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    console.log('Roll Dice btn -> click');

    if(gamePlaying){
        // 1. Get random number
        dice = Math.floor(Math.random() * 6) + 1;

        // 2. display the result
        console.log('dice :', dice);
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // Challenge 1: two 6 in a row
        // 3. Next player IF dice = 1 or two 6 in a row
        if(dice === 1){
            nextPlayer();
        }

        else if (dice === 6 && previousDice === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }

        else{
            previousDice = dice;
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    console.log('Hold btn -> click');
    
    if(gamePlaying){
        // Add current score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        // Check if player won the game
        if(scores[activePlayer] >= winScore){
            gamePlaying = false;

            document.querySelector('#name-' + activePlayer).textContent = 'Player ' + activePlayer + ' is the winner!';
            diceDOM.style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        }
        else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
    previousDice = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // toggle -> add or remove

    diceDOM.style.display = 'none';
}

function init(){
    console.log('\nCalling init()\n');

    // Challenge 1: two 6 in a row
    previousDice = 0;

    gamePlaying = true;
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');

    console.log('\n');
    
}



