// define player name
var playerName = localStorage.getItem("playerName");

localStorage.setItem("playerName", '');

//define player stats
let stats = {
  HP: 0,
  ATK: 0,
  SPD: 0,
  DEF: 0
};
let gold = 30000
let selectedMonster;
let lossCounter = 0
let ship;
let captain;
let cannon;
let crew;




//define Monster stats
let sirens = {
  HP: 2,
  ATK: 4,
  SPD: 6,
  DEF: 3
}
let ghostShip = {
  HP: 6,
  ATK: 3,
  SPD: 3,
  DEF: 5
};
let shark = {
  HP: 6,
  ATK: 7,
  SPD: 6,
  DEF: 4
};
let kraken = {
  HP: 8,
  ATK: 8,
  SPD: 6,
  DEF: 10
};
let oceanGod = {
    HP: 10,
    ATK: 10,
    SPD: 10,
    DEF: 10
};

// Start page functions
$("#startButton").click(function() {
  localStorage.setItem("playerName", playerName);
  window.location.href = "gamePage.html";
});

$(".nameInput").keypress(function(event) {
  playerName += event.key;
});



// Game Page functions
function displayStats() {
  return "Your current stats are as follows,\nHP: " + stats.HP + "\nATK: " + stats.ATK
  + "\nSPD: " + stats.SPD + "\nDEF: " + stats.DEF + "\nGOLD: " + gold +
  "\nYou selected the bounty on " + selectedMonster;
}
function getPlayerName() {
  if(!playerName){
    alert("Okay stranger, are you ready to play?")
  } else {
    alert("Okay " + playerName + ", are you ready to play?");
  }
}
function compareStats(inputUser, inputMonster){
  if (inputUser <= inputMonster){
    lossCounter += 1;
  }
}
function checkGold(goldInput) {
  if (gold - goldInput < 0) {
    return true;
  } else {
    return false;
  }
}
function finalBattle(){
  if (selectedMonster == "Sirens"){
    compareStats(stats.HP, sirens.HP);
    compareStats(stats.ATK, sirens.ATK);
    compareStats(stats.SPD, sirens.SPD);
    compareStats(stats.DEF, sirens.DEF);
  } else if (selectedMonster == "Ghost Ship"){
    compareStats(stats.HP, ghostShip.HP);
    compareStats(stats.ATK, ghostShip.ATK);
    compareStats(stats.SPD, ghostShip.SPD);
    compareStats(stats.DEF, ghostShip.DEF);
  } else if (selectedMonster == "Great Shark"){
    compareStats(stats.HP, shark.HP);
    compareStats(stats.ATK, shark.ATK);
    compareStats(stats.SPD, shark.SPD);
    compareStats(stats.DEF, shark.DEF);
  } else if (selectedMonster == "Kraken"){
    compareStats(stats.HP, kraken.HP);
    compareStats(stats.ATK, kraken.ATK);
    compareStats(stats.SPD, kraken.SPD);
    compareStats(stats.DEF, kraken.DEF);
  } else if (selectedMonster == "Cthulhu"){
    compareStats(stats.HP, oceanGod.HP);
    compareStats(stats.ATK, oceanGod.ATK);
    compareStats(stats.SPD, oceanGod.SPD);
    compareStats(stats.DEF, oceanGod.DEF);
  }
  if (lossCounter >= 2){
    alert("Sorry, you lose, you and your crew have been bested by " + selectedMonster + ".");
  } else {
    alert("You Win! You have claimed the bounty on " + selectedMonster + ".");
  }
}
$("#homeButton").click(function() {
  window.location.href = "index.html";
});
$("#displayStats").click(function(){
  alert(displayStats());
});



// Game Page SLIDE functions
  // Monsters
$("#sirens").click(function() {
  let result = confirm("You have selected the bounty on the 'SIRENS', do you wish to continue with this bounty?")
  if (result == true){
    selectedMonster = "Sirens";
  }
});
$("#ghostShip").click(function() {
  let result = confirm("You have selected the bounty on the 'GHOST SHIP', do you wish to continue with this bounty?")
  if (result == true){
    selectedMonster = "Ghost Ship";
  }
});
$("#shark").click(function() {
  let result = confirm("You have selected the bounty on the 'GREAT SHARK', do you wish to continue with this bounty?")
  if (result == true){
    selectedMonster = "Great Shark";
  }
});
$("#kraken").click(function() {
  let result = confirm("You have selected the bounty on the 'KRAKEN', do you wish to continue with this bounty?")
  if (result == true){
    selectedMonster = "Kraken";
  }
});
$("#oceanGod").click(function() {
  let result = confirm("You have selected the bounty on the 'CTHULHU', do you wish to continue with this bounty?")
  if (result == true){
    selectedMonster = "Cthulhu";
  }
});


//SHIPS --- notes: consider chaging stats entirely, to avoid selecting multiple ships
$("#smallShip").click(function() {
  let result = confirm("You have selected the ship 'OL RELIABLE', do you wish to continue with this ship?")
  if (result != true){} else {
  if (ship == null){
    ship = "OL RELIABLE"
      stats.HP += 1;
      stats.ATK += 2;
      stats.SPD += 3;
      stats.DEF += 1;
      gold -= 2000;
    }
    else {
      alert("Sorry, but you've already selected the ship " + ship + ".")
    }
  }
});

$("#jetShip").click(function() {
  let result = confirm("You have selected the ship 'JET PUNKER', do you wish to continue with this ship?")
  if (result != true){} else {
    if (ship == null){
      ship = "JET PUNKER";
      stats.HP += 3
      stats.ATK += 3
      stats.SPD += 9
      stats.DEF += 2
      gold -= 4000
    } else {
        alert("Sorry, but you've already selected the ship " + ship + ".")
    }
  }
});

$("#medShip").click(function(){
  let result = confirm("You have selected the ship 'CRIMSION SWORD', do you wish to continue with this ship?")
  if (result != true){} else {
  if (ship == null){
    ship = "CRIMSION SWORD"
      stats.HP += 4;
      stats.ATK += 5;
      stats.SPD += 5;
      stats.DEF += 4;
      gold -= 8000;
    } else {
        alert("Sorry, but you've already selected the ship " + ship + ".")
    }
  }
});

$("#toughShip").click(function(){
  let result = confirm("You have selected the ship 'CRIMSION SHIELD', do you wish to continue with this ship?")
  if (result != true){} else {
  if (ship == null){
    ship = "CRIMSION SHIELD"
      stats.HP += 8;
      stats.ATK += 4;
      stats.SPD += 3;
      stats.DEF += 9;
      gold -= 13000;
    } else {
      alert("Sorry, but you've already selected the ship " + ship + ".")
    }
  }
});

$("#godShip").click(function(){
  let result = confirm("You have selected the ship 'POSIDEN'S BLESSING', do you wish to continue with this ship?")
  if (result != true){} else {
  if (ship == null){
    ship = "POSIDEN'S BLESSING"
      stats.HP += 8;
      stats.ATK += 5;
      stats.SPD += 2;
      stats.DEF += 7;
      gold -= 18000;
    } else {
        alert("Sorry, but you've already selected the ship " + ship + ".")
    }
  }
});


// CAPTAINS
$("#drunkCaptain").click(function(){
  let result = confirm("You have selected the captain 'DRUNKARD', do you wish to continue with this captain?")
  if (result == true){
  if (captain == null){
    captain = "DRUNKARD"
    let check = checkGold(2000)
      if (check == true){
        alert("Sorry, you don't have enough GOLD to purchase this Captain, please make another selection.")
      } else {
          gold -= 2000;
          stats.ATK += 2;
          stats.SPD -= 1;
      }
    } else {
        alert("Sorry, but you've already selected the captain " + captain + ".")
    }
  }
});

$("#liarCaptain").click(function(){
  let result = confirm("You have selected the captain 'THEIF', do you wish to continue with this captain?")
  if (result == true){
  if (captain == null){
    captain = "THEIF"
    let check = checkGold(8000)
      if (check == true){
        alert("Sorry, you don't have enough GOLD to purchase this Captain, please make another selection.")
      } else {
          gold -= 8000;
          stats.ATK += 2;
          stats.SPD += 1
          stats.DEF -= 2;
      }
    } else {
        alert("Sorry, but you've already selected the captain " + captain + ".")
    }
  }
});

$("#navyCaptain").click(function(){
  let result = confirm("You have selected the captain 'IRONSIDE', do you wish to continue with this captain?")
  if (result == true){
  if (captain == null){
    captain = "IRONSIDE"
    let check = checkGold(10000)
      if (check == true){
        alert("Sorry, you don't have enough GOLD to purchase this Captain, please make another selection.")
      } else {
        gold -= 10000;
        stats.DEF += 3;
        stats.HP += 2
        stats.ATK -= 1;
      }
    } else {
        alert("Sorry, but you've already selected the captain " + captain + ".")
    }
  }
});

$("#youngCaptain").click(function(){
  let result = confirm("You have selected the captain 'SUNBRINGER', do you wish to continue with this captain?")
  if (result == true){
  if (captain == null){
    captain = "SUNBRINGER"
    let check = checkGold(13000)
      if (check == true){
        alert("Sorry, you don't have enough GOLD to purchase this Captain, please make another selection.")
      } else {
          gold -= 13000
          stats.ATK += 4;
          stats.SPD += 3
          stats.DEF -= 2;
      }
    } else {
        alert("Sorry, but you've already selected the captain " + captain + ".")
    }
  }
});

$("#blackbeard").click(function(){
  let result = confirm("You have selected the captain 'BLACKBEARD', do you wish to continue with this captain?")
  if (result == true){
  if (captain == null){
    captain = "BLACKBEARD"
    let check = checkGold(15000)
      if (check == true){
        alert("Sorry, you don't have enough GOLD to purchase this Captain, please make another selection.")
      } else {
          gold -= 15000;
          stats.ATK += 4;
          stats.DEF += 2
          stats.HP += 2;
          stats.SPD -= 1;
      }
    } else {
        alert("Sorry, but you've already selected the captain " + captain + ".")
    }
  }
});

// CANNONS
$("#smallCannon").click(function(){
  let result = confirm("You have selected the cannon 'SILVER BULLET', do you wish to continue with this cannon?")
  if (result == true){
    if (cannon == null){
      cannon = "SILVER BULLET";
      let check = checkGold(1000)
        if (check == true){
          alert("Sorry, you don't have enough GOLD to purchase this cannon, please make another selection.")
        } else {
          gold -= 1000;
          stats.ATK += 1;
          stats.SPD +=1;
          stats.HP -=1;
        }
    } else {
      alert("Sorry, but you've already selected the cannon " + cannon + ".")
    }
  }
});
$("#jetCannon").click(function(){
  let result = confirm("You have selected the cannon 'STEAMJET', do you wish to continue with this cannon?")
  if (result == true){
    if (cannon == null){
      cannon = "STEAMJET";
      let check = checkGold(4000)
        if (check == true){
          alert("Sorry, you don't have enough GOLD to purchase this cannon, please make another selection.")
        } else {
          gold -= 4000;
          stats.ATK += 1;
          stats.SPD +=3;
          stats.HP -=1;
        }
    } else {
      alert("Sorry, but you've already selected the cannon " + cannon + ".")
    }
  }
});
$("#flowerCannon").click(function(){
  let result = confirm("You have selected the cannon 'IRON FLOWER', do you wish to continue with this cannon?")
  if (result == true){
    if (cannon == null){
      cannon = "IRON FLOWER";
      let check = checkGold(7000)
        if (check == true){
          alert("Sorry, you don't have enough GOLD to purchase this cannon, please make another selection.")
        } else {
          gold -= 7000;
          stats.DEF += 3;
          stats.HP +=2;
          stats.ATK -=1;
          stats.SPD -=1;
        }
    } else {
      alert("Sorry, but you've already selected the cannon " + cannon + ".")
    }
  }
});
$("#rapidCannon").click(function(){
  let result = confirm("You have selected the cannon 'MOTHER IN-LAW', do you wish to continue with this cannon?")
  if (result == true){
    if (cannon == null){
      cannon = "MOTHER IN-LAW";
      let check = checkGold(9000)
        if (check == true){
          alert("Sorry, you don't have enough GOLD to purchase this cannon, please make another selection.")
        } else {
          gold -= 9000;
          stats.ATK += 4;
          stats.SPD +=3;
          stats.DEF -=3;
          stats.HP -=1;
        }
    } else {
      alert("Sorry, but you've already selected the cannon " + cannon + ".")
    }
  }
});
$("#godCannon").click(function(){
  let result = confirm("You have selected the cannon 'POSIDEN'S TREASURE', do you wish to continue with this cannon?")
  if (result == true){
    if (cannon == null){
      cannon = "POSIDEN'S TREASURE";
      let check = checkGold(11000)
      if (check == true){
          alert("Sorry, you don't have enough GOLD to purchase this cannon, please make another selection.")
        } else {
          gold -= 11000;
          stats.ATK += 5;
          stats.HP +=2;
          stats.DEF +=2;
          stats.SPD -=5;
        }
    } else {
      alert("Sorry, but you've already selected the cannon " + cannon + ".")
    }
  }
});

// CREW
$("#cheapCrew").click(function(){
  let result = confirm("You have selected the crew 'ONE GOLD', do you wish to continue with this crew?")
  if (result == true){
    if (crew == null){
      crew = "ONE GOLD CREW";
      let check = checkGold(1000);
      if (check == true){
        alert("Sorry, you don't have enough GOLD to purchase this crew, please make another selection.")
      } else{
        gold -= 1000;
        stats.SPD += 1;
        stats.HP += 1;
        stats.ATK -=2;
      }
    } else {
      alert("Sorry, but you've already selected the " + crew + ".")
    }
  }
});
$("#corpoCrew").click(function(){
  let result = confirm("You have selected the 'CORPORATE CREW', do you wish to continue with this crew?")
  if (result == true){
    if (crew == null){
    crew = "CORPORATE CREW";
    let check = checkGold(4000);
    if (check == true){
      alert("Sorry, you don't have enough GOLD to purchase this crew, please make another selection.")
    } else {
      gold -= 4000;
      stats.SPD +=3;
      stats.DEF -=1;
      stats.ATK -=1;
    }
  } else {
      alert("Sorry, but you've already selected the " + crew + ".")
    }
  }
});
$("#undeadCrew").click(function(){
  let result = confirm("You have selected the 'UNDEAD CREW', do you wish to continue with this crew?")
  if (result == true){
    if (crew == null){
      crew = "UNDEAD CREW";
      let check = checkGold(7000);
      if (check == true){
        alert("Sorry, you don't have enough GOLD to purchase this crew, please make another selection.")
      } else {
        gold -=7000;
        stats.HP +=3;
        stats.ATK +=1;
        stats.DEF -=1;
        stats.SPD -=2;
      }
    } else {
      alert("Sorry, but you've already selected the " + crew + ".")
    }
  }
});
$("#navyCrew").click(function(){
  let result = confirm("You have selected the 'QUEEN'S ELITE' crew, do you wish to continue with this crew?")
  if (result == true){
    if (crew == null){
      crew = "QUEEN'S ELITE CREW"
      let check = checkGold(9000);
      if (check == true){
        alert("Sorry, you don't have enough GOLD to purchase this crew, please make another selection.")
      } else {
        gold -=9000;
        stats.ATK +=3;
        stats.DEF +=2;
        stats.HP -=2;
        stats.SPD -=1;
      }
    } else {
        alert("Sorry, but you've already selected the " + crew + ".")
    }
  }
});
$("#blackbeardCrew").click(function(){
  let result = confirm("You have selected 'BLACKBEARD'S CREW', do you wish to continue with this crew?")
  if (result == true){
    if (crew == null){
      crew = "BLACKBEARD'S CREW";
      let check = checkGold(11000);
      if (check == true){
        alert("Sorry, you don't have enough GOLD to purchase this crew, please make another selection.")
      } else {
        gold -=11000;
        stats.ATK +=3;
        stats.SPD +=3;
        stats.HP -=2;
        stats.DEF -=2;
      }
    } else {
      alert("Sorry, but you've already selected the " + crew + ".");
    }
  }
});

// END PAGE
$("#endPage").click(function(){
  finalBattle();
})
