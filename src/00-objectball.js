const gameObject = () => {
   return {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": ["Black", "White"],
      "players": {
        "Alan Anderson": {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        },
        "Reggie Evans": {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 12,
          "blocks": 12,
          "slamDunks": 7
        },
        "Brook Lopez": {
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 15
        },
        "Mason Plumlee": {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 11,
          "assists": 6,
          "steals": 3,
          "blocks": 8,
          "slamDunks": 5
        },
        "Jason Terry": {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 4,
          "blocks": 11,
          "slamDunks": 1
        }
      }
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors": ["Turquoise", "Purple"],
      "players": {
        "Jeff Adrien": {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 1,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2
        },
        "Bismak Biyombo": {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 4,
          "assists": 7,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10
        },
        "DeSagna Diop": {
          "number": 2,
          "shoe": 14,
          "points": 24,
          "rebounds": 12,
          "assists": 12,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 5
        },
        "Ben Gordon": {
          "number": 8,
          "shoe": 15,
          "points": 33,
          "rebounds": 3,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0
        },
        "Brendan Haywood": {
          "number": 33,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 12,
          "steals": 22,
          "blocks": 5,
          "slamDunks": 12
        }
      }
    }
  }
}

console.log(gameObject())

function numPointsScored(playerName) {
  // Check if the playerName exists in the gameData
  if (gameObject().home.players.hasOwnProperty(playerName) || gameObject().away.players.hasOwnProperty(playerName)) {
    return gameObject().home.players[playerName].points;
    } else {
        return gameObject().away.players[playerName].points;
    }
  }

console.log(numPointsScored('Alan Anderson'))

function shoeSize(playerName) {
  if (gameObject().home.players.hasOwnProperty(playerName) || gameObject().away.players.hasOwnProperty(playerName)) {
    return gameObject().home.players[playerName].shoeSize 
  } else {
    return gameObject().away.players[playerName].shoeSize 
  }
}

console.log("Alan Anderson")

function teamColors(teamName){
  if (gameObject().home.hasOwnProperty(teamName) || gameObject().away.hasOwnProperty(teamName)) {
    return gameObject().home.colors
  } else {
    return gameObject().away.colors
  }
}
console.log(teamColors("Charlotte Hornets"))

function teamNames() {
  let teamName = []
  teamName.push(gameObject().home.teamName)
  teamName.push(gameObject().away.teamName)
  return teamName;
}
console.log(teamNames())

function playerNumbers(teamName) {
  // Retrieve the game object
  const game = gameObject();

  // Check if the teamName corresponds to home or away team
  if (game.home.teamName === teamName) {
      return Object.values(game.home.players).map(player => player.number);
  } else if (game.away.teamName === teamName) {
      return Object.values(game.away.players).map(player => player.number);
  } else {
      // If the teamName doesn't exist, return an empty array or handle the case appropriately
      return []; // or return a message indicating the team wasn't found
  }
}

console.log(playerNumbers("Charlotte Hornets"))

const playerStats = (playerName) => {
  const game = gameObject();

  if (game.home.players.hasOwnProperty(playerName)) {
    return game.home.players[playerName];
  } else if (game.away.players.hasOwnProperty(playerName)) {
    return game.away.players[playerName];
  } else {
    return `${playerName} not found in either team's players`;
  }
}

console.log(playerStats("Jeff Adrien"));

function bigShoeRebounds() {
  let bigShoe = 0;
  let playerName = "";

  for (const team in gameObject()) {
    for (const player in gameObject()[team].players) {
      const playerStats = gameObject()[team].players[player];
      if (playerStats.shoe > bigShoe) {
        bigShoe = playerStats.shoe;
        playerName = player;
      }
    }
  }

  return playerStats(playerName).rebounds;
}
console.log(bigShoeRebounds("Alan Anderson"))