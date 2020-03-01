var roundScore=0,activePlayer=0;
var dice = Math.floor(Math.random()*6)+1;
var scores=[0,0];
var gamePlaying=true;

document.getElementById('score-'+activePlayer).textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-'+activePlayer).textContent=0;
 scores[activePlayer]=scores[activePlayer]+roundScore;

var imageDice =document.querySelector('.dice');


document.querySelector('.btn-roll').addEventListener('click',function(){
if(gamePlaying){
    var dice = Math.floor(Math.random()*6)+1;
    if(dice!==1){

    roundScore=roundScore+dice;
    document.getElementById('current-'+activePlayer).textContent=roundScore;
    imageDice.style.display='block';
    imageDice.src='dice-'+dice+'.png';
}
    else{
        document.getElementById('current-'+activePlayer).textContent=0;
        activePlayer===0 ? activePlayer=1: activePlayer=0;
        roundScore=0;
        imageDice.style.display='none';

        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.player-0-panel').classList.toggle('active');

    }
}

})


document.querySelector('.btn-hold').addEventListener('click',function(){

             if(roundScore>=10){
    document.getElementById('name-'+activePlayer).textContent='Winner!';

        document.querySelector('.dice').style.display='none';

        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');

        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
                 gamePlaying=false;
}
    else {
     scores[activePlayer]=scores[activePlayer]+roundScore;
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    document.getElementById('current-'+activePlayer).textContent=0;

    activePlayer===0 ? activePlayer=1: activePlayer=0;
    roundScore=0;
    imageDice.style.display='none';

    document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
    }

})

document.querySelector('.btn-new').addEventListener('click',function(){
    activePlayer=0;
    roundScore=0;


    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;

    document.getElementById('name-0').textContent='Player 1';
        document.getElementById('name-1').textContent='Player 2';

   document.getElementById('current-0').textContent=0;
   document.getElementById('current-1').textContent=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
     imageDice.style.display='none';
    gamePlaying=true;
})





















