let allScores = [];

const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    
    ];

    for (let elementKey in players) {
        allScores.push(players[elementKey].scorePoints)
        }

let bestScore = Math.max(...allScores)
let bestPlayer = ""

for (let elementKey in players){
    if (players[elementKey].scorePoints === bestScore) {
        bestPlayer = players[elementKey].name
    }
}


console.log(`Player ${bestPlayer} has the best score of ${bestScore}!`)    
