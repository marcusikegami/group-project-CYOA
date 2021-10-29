var charOptions = {
    characterOne: {
        className: "TEST 1",
        classType: "FIGHTER",
        classHealth: 100,
        classDefense: .5,
    },
    characterTwo :{
        className: "TEST 2",
        classType: "ROGUE",
        classHealth: 75,
        classDefense: .15,
    },
};

// console.log(charOptions)
console.log(charOptions.characterOne)
console.log(charOptions.characterOne.className)
console.log(charOptions.characterOne.classType)
console.log(charOptions.characterOne.classHealth)
console.log(charOptions.characterOne.classDefense)


console.log(charOptions.characterTwo)
console.log(charOptions.characterTwo.className)
console.log(charOptions.characterTwo.classType)
console.log(charOptions.characterTwo.classHealth)
console.log(charOptions.characterTwo.classDefense)

var playerNameEl = document.getElementById("playerName");
var playerClassEl= document.getElementById("playerClass");
var playerHealthEl = document.getElementById("playerHealth");
var playerDefenseEl = document.getElementById("playerDefense");
var playerCredits = document.getElementById("playerCredits");

playerNameEl.textContent = charOptions.characterOne.className;
playerClassEl.textContent = charOptions.characterOne.classType;
playerHealthEl.textContent = charOptions.characterOne.classHealth;
playerDefenseEl.textContent = charOptions.characterOne.classDefense * 100;

// playerNameEl.textContent = charOptions.characterTwo.className;
// playerClassEl.textContent = charOptions.characterTwo.classType;
// playerHealthEl.textContent = charOptions.characterTwo.classHealth;
// playerDefenseEl.textContent = charOptions.characterTwo.classDefense * 100;