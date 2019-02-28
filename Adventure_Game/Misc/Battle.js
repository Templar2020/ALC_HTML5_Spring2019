var battling = true;
var playerHp = 50;
var enemyHp = 120;

//Player's Attack Turn
var playerTurn = function(){
var playerAccuracy = Math.floor(Math.random()* 3 + 1);
var playerAttackDamage = Math.floor(Math.random()* 20 + 1);
var playerCritical = Math.floor(Math.random() * 15 + 1);

if(playerAccuracy > 1 && playerCritical>=13){
    playerAttackDamage = Math.floor(Math.random()* 20 + 5);
    enemyHp -= playerAttackDamage;
    alert("Your CRITICAL attack hits.  Bahamut suffers"+" "+playerAttackDamage+" "+"damage!\nCloud:"+" "+playerHp+"HP/50HP\nBahamut:"+" "+enemyHp+"HP/120HP");
}
else if(playerAccuracy > 1) {
    enemyHp -= playerAttackDamage;
    alert("Your attack hits.  Bahamut suffers"+" "+playerAttackDamage+" "+"damage!\nCloud:"+" "+playerHp+"HP/50HP\nBahamut:"+" "+enemyHp+"HP/120HP");
    }
else{
    alert("Your attack missed!\nCloud:"+" "+playerHp+"HP/50HP\nBahamut:"+" "+enemyHp+"HP/120HP");
}
};

//Enemy's Attack Turn
var enemyTurn = function(){
var enemyAccuracy = Math.floor(Math.random()* 5 + 1);
var enemyAttackDamage = Math.floor(Math.random()* 5 + 1);
var enemyCritical = Math.floor(Math.random() * 20 + 1);

if(enemyAccuracy > 3 && enemyCritical>=13){
    enemyAttackDamage = Math.floor(Math.random()* 10 + 5);
    playerHp -= enemyAttackDamage;
alert("Bahamut CRITICALLY attacks!  You suffer"+" "+enemyAttackDamage+" "+"damage!\nCloud:"+" "+playerHp+"HP/50HP\nBahamut:"+" "+enemyHp+"HP/120HP");
}
else if(enemyAccuracy > 3) {
    playerHp -= enemyAttackDamage;
alert("Bahamut attacks!  You suffer"+" "+enemyAttackDamage+" "+"damage!\nCloud:"+" "+playerHp+"HP/50HP\nBahamut:"+" "+enemyHp+"HP/120HP");
    }
else{
    alert("Bahamut misses!\nCloud:"+" "+playerHp+"HP/50HP\nBahamut:"+" "+enemyHp+"HP/120HP");
}
};

var battle = function(){
alert("Battle Start!");
while(battling){
    playerTurn();
    if(enemyHp <= 0){
        alert("Victory!");
        battling = false;
    }
    if(enemyHp > 0){
    enemyTurn();
       if(playerHp <= 0){
           alert("Defeat!");
           battling = false;
       }
    }
}
};
battle();