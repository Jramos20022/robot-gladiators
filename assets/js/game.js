var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerMoney= 10;

    if(playerHealth > 0){
        console.log("Your player is still alive!");
    }
    else{
        console.log("this will run instead.")
    }
var playerAttack = 10;


console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  var promptfight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if(promptfight === "fight" || promptfight === "FIGHT"){

  // Log a resulting message to the console so we know that it worked.

  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  if (enemyHealth <= 0){
      window.alert(enemyName + "has died!");
    }
    else{
        window.alert(enemyName + "still has " + enemyHealth + " health left.");
    }

  // Log a resulting message to the console so we know that it worked.

 console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if(playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }else if (promptfight === "skip" || promptfight === "SKIP"){
      var confirmSKip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSKip){
          window.alert(playerName + " has decided to skip this fight. Goodbye!")
          playerMoney = playerMoney - 2;
      }
      else{
          fight();
      }
  }else {
      window.alert;("You need to choose a valid option. Try again!");
  }

};

fight();