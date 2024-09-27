let allScores = [];

const secondGroup = [
    { id: 1, name: "Alice", scorePoints: 5000 },
    { id: 2, name: "Bob", scorePoints: 6200 },
    { id: 3, name: "Charlie", scorePoints: 4800 },
    { id: 4, name: "Diana", scorePoints: 5900 },
    { id: 5, name: "Eve", scorePoints: 6700 }
];

for (let elementKey in secondGroup) {
        allScores.push(secondGroup[elementKey].scorePoints)
        }

let bestScore = Math.max(...allScores)
let bestPlayer = ""

for (let elementKey in players){
    if (secondGroup[elementKey].scorePoints === bestScore) {
        bestPlayer = secondGroup[elementKey].name
    }
}


console.log(`secondGroup ${bestPlayer} has the best score of ${bestScore}!`)    
