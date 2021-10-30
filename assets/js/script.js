let storylogEl = document.querySelector(".story-log");
const textInput = document.getElementById("text-input");
const interactEl = document.getElementById("interact-container");
const itemsEl = document.getElementById("items-container");
var startScreen = document.getElementById("start-screen");
var charPage = document.getElementById("char-page");
var mainPageScreen = document.getElementById("main-page");
var selectCharOne = document.getElementById("charOne-button");
var selectCharTwo = document.getElementById("charTwo-button");


document.getElementById("log-wrapper").addEventListener("click", function () {
    textInput.focus();
});

let credits = 0;

var items = {
    knife: { item: "knife", damage: 5 }

};

var boatNodes = [
    
            {

                id: 0,
                music: "Ludwig Van Beethoven",
                text: "Paradise. Beneath a sea of tranquil blue and a brilliant star whose light had never dulled you stood. Around you the waves of forest green danced and rolled idlely swishing to-and-fro as the breeze slid from tide to tide. The blades themselves rose as upthrust spears, soft feather-like tips tickling against your foot and ankle. The sweet scents of summer, warmed and crisped beneath that vibrant flame, fill your nostrils rushing through your body their numerous fragrances, pollens, and particulates an euphoric assault of explosive consumption -- intoxicating. WALK",
                options: [
                    {
                        text: "walk",
                        nextNode: 1           
                    },
                    {
                        text: "",
                        nextNode: 1
                    },
                   
                ]
            },
            {
                id: 1,
                music: "Ludwig Van Beethoven",
                text: "As you step through these picturesque environs, your skin warmed and invigorated by the welcomed explosion of nature's forces, a gentle calm descends upon you. A peace more deep than any you have ever felt caresses your conscience as the bright fileds of warmth spread before you. Gradually, a weight builds behind your eyes and you find your limbs growing slack. A determination calls to you, pulling you downwards. As if into the plains themself. Aroused by the curiousity of your predicament you push yourself deeper into this beautiful nightmare. The calm gait with which you had started, shambles into a slurred sleepy wobble, and shattering into a frenzied lurch before you finally collapse on hands and knees spread out beneath the staring sky in supplication. A shadow falls over you. FIGHT",
                options: [
                    {
                        text: "fight",
                        nextNode: 2
                    }
                ]
            },
            {
                id: 2,
                text: "You stand up from your bed to the floor of the ships cabin. You don't remember how you even got on a ship in the first place. LEAVE the room or peer out your WINDOW.",
                options: [
                    {
                        text: "window",
                        nextNode: 3,
                    },
                    {
                        text: "leave",
                        nextNode: 5
                    }
                ]
            },
            {


                id: 3,
                text: "You awake. Icey cold shocks your sleep adled mind leaving you in momentary paralysis as the memories of what you saw receed and fade. Only a slight hint of fury and malignance of the entity remains. That is enough. The world remains a dark prison of emptiness defined by the water that sloshed at your feet and the taunting cold that determinedly dogged at your body's nerves. WAIT",
                options:[
                    {
                        text: "wait",
                        nextNode: 4,
                    }
                ]
            },
            {
                id: 4,
                text: "Gradually as your eyes adjust to the little light available an entire room opens up around you. Defined by the sharp contours of its walls and what meaningless furniture and equipment was stowed here. Inset into one wall a simple DOOR stands ajar, a slight crack gives entry to a stronger though muted source of light beyond. Directly opposite your own position another access-way, a small HATCH opens to a downward falling ladder. Of all the rooms noteable furniture an overturned DESK appears to be lying haphazardly, angled as though something beneath it had roughly intercepted its descent.",
                options:[
                    {
                        text: "door",
                        nextNode: 7,
                    },
                    {
                        text: "hatch",
                        nextNode: 6,
                    },
                    {
                        text: "desk",
                        nextNode: 5,
                    }
                ]
            },
            {
                id: 5,
                text: "You approach the desk. Gingerly you shy around the bulky objects tortured angle to the face on which it lies turned. Beneath it a small crate has caved, exposing a handful of coins. Rummaging about the desks various secrets and crannies you discover a small nondescript knife and some personal note. LEAVE",
                options: [
                    {
                        text: "leave",
                        setState: {knife: true, note1: true, logItem: "You have picked up a knife, 15 credits, and a note", text:"Knife", altercredits: 15},
                        nextNode: 4
                    },
                ]
            },
            {
                id: 6,
                text: "You approach the hatch. A dark tunnel travels downward. At the bottom a small blue light flicks at irregular intervals. You recall that to DESCEND would lead you further into the ship. Behind you the ROOM remains tranquil.",
                options: [
                    {
                        text: "descend",
                        nextNode: 8,
                    },
                    {
                        text: "room",
                        nextNode: 4,
                    }
                ]
            },
            {
                id: 7,
                text: "You approach the door. ",
                options: [
                    {
                        text: "exit",
                        nextNode: 8,
                    },
                    {
                        text: "room",
                        nextNode: 4,
                    },
                ]

            },
        ];

// PLAYER STATS
var charOptions = {
    characterOne: {
        className: "CHARACTER 1",
        classType: "FIGHTER",
        classHealth: 100,
        classDefense: .5,
    },
    characterTwo: {
        className: "CHARACTER 2",
        classType: "ROGUE",
        classHealth: 75,
        classDefense: .15,
    },
    characterThree: {
        className: "CHARACTER 3",
        classType: "MAGE",
        classHealth: 50,
        classDefense: .125,
    },
};
var charOneName = document.getElementById("playerName1");
var charOneClass = document.getElementById("playerClass1");
var charOneHealth = document.getElementById("playerHealth1");
var charOneDefense = document.getElementById("playerDefense1");

var charTwoName = document.getElementById("playerName2");
var charTwoClass = document.getElementById("playerClass2");
var charTwoHealth = document.getElementById("playerHealth2");
var charTwoDefense = document.getElementById("playerDefense2");

var charThreeName = document.getElementById("playerName3");
var charThreeClass = document.getElementById("playerClass3");
var charThreeHealth = document.getElementById("playerHealth3");
var charThreeDefense = document.getElementById("playerDefense3");

// var playerCredits = document.getElementById("playerCredits");

charOneName.textContent = charOptions.characterOne.className;
charOneClass.textContent = charOptions.characterOne.classType;
charOneHealth.textContent = charOptions.characterOne.classHealth;
charOneDefense.textContent = charOptions.characterOne.classDefense * 100;
//    playerCredits.textContent = credits;
charTwoName.textContent = charOptions.characterTwo.className;
charTwoClass.textContent = charOptions.characterTwo.classType;
charTwoHealth.textContent = charOptions.characterTwo.classHealth;
charTwoDefense.textContent = charOptions.characterTwo.classDefense * 100;

charThreeName.textContent = charOptions.characterThree.className;
charThreeClass.textContent = charOptions.characterThree.classType;
charThreeHealth.textContent = charOptions.characterThree.classHealth;
charThreeDefense.textContent = charOptions.characterThree.classDefense * 100;

document.getElementById("start-button").addEventListener("click", function () {
    startScreen.setAttribute("class", "hide");
    charPage.setAttribute("class", "show");
});

document.getElementById("charOne-button").addEventListener("click", function () {
    charPage.setAttribute("class", "hide");
    mainPageScreen.setAttribute("class", "show");


    var choseOneName = document.getElementById("game-name");
    var choseOneClass = document.getElementById("game-class");
    var choseOneHealth = document.getElementById("game-health");
    var choseOneDef = document.getElementById("game-defense");

    choseOneName.textContent = charOptions.characterOne.className;
    choseOneClass.textContent = charOptions.characterOne.classType;
    choseOneHealth.textContent = charOptions.characterOne.classHealth;
    choseOneDef.textContent = charOptions.characterOne.classDefense * 100;
});

document.getElementById("charTwo-button").addEventListener("click", function () {
    charPage.setAttribute("class", "hide");
    mainPageScreen.setAttribute("class", "show");
  
    var choseTwoName = document.getElementById("game-name");
    var choseTwoClass = document.getElementById("game-class");
    var choseTwoHealth = document.getElementById("game-health");
    var choseTwoDef = document.getElementById("game-defense");

    choseTwoName.textContent = charOptions.characterTwo.className;
    choseTwoClass.textContent = charOptions.characterTwo.classType;
    choseTwoHealth.textContent = charOptions.characterTwo.classHealth;
    choseTwoDef.textContent = charOptions.characterTwo.classDefense * 100;
});

document.getElementById("charThree-button").addEventListener("click", function () {
    charPage.setAttribute("class", "hide");
    mainPageScreen.setAttribute("class", "show");
  
    var choseThreeName = document.getElementById("game-name");
    var choseThreeClass = document.getElementById("game-class");
    var choseThreeHealth = document.getElementById("game-health");
    var choseThreeDef = document.getElementById("game-defense");

    choseThreeName.textContent = charOptions.characterThree.className;
    choseThreeClass.textContent = charOptions.characterThree.classType;
    choseThreeHealth.textContent = charOptions.characterThree.classHealth;
    choseThreeDef.textContent = charOptions.characterThree.classDefense * 100;
});



function clearInteractEl() {
    if (interactEl.firstChild) {

        interactEl.innerHTML = "";
    };
}

function startChapter() {

items = {};
storyLog(0);
musicLog("Ludwig Van Beethoven");


};
function populateInteract(response) {
    var pEl = document.createElement("p");
    pEl.textContent = response;
    interactEl.appendChild(pEl);
};
storyLog = (nodeId) => {
    clearInteractEl();
    var textNode = boatNodes.find(textNode => textNode.id === nodeId);
    
    var pEl = document.createElement("p");
    pEl.textContent = textNode.text;
    artist = textNode.music;
    
    storylogEl.prepend(pEl);
    textInput.focus();
    musicLog(artist);
    showOptions(textNode);


    function showOptions(textNode) {
        debugger;

        for (i = 0; i < textNode.options.length; i++) {
            var response = textNode.options[i];
            console.log(response);
            var responseText = response.text;
            populateInteract(responseText);


        }


    }               


    function showItems(addItem) {
        var pEl = document.createElement("p");
        pEl.textContent = addItem;
        itemsEl.appendChild(pEl);
    }

        function logItems(logItem) {
            var pEl = document.createElement("p");
            pEl.textContent = logItem;
            storylogEl.prepend(pEl);
        }
        
    
    
        chooseOption = (value) => {
    
    
            for (i = 0; i < textNode.options.length; i++) {
                var response = textNode.options[i];
    
    
    
                if (value === response.text) {
                    var nextNode = response.nextNode;
                    console.log("possible answer");
    
                    if (response.setState) {
    
                        var logItem = response.setState.logItem
                        var addItem = response.setState.text;
    
                        credits += response.setState.altercredits;
                        playerCredits = credits;
                        logItems(logItem);
                        showItems(addItem)
    
    
                    };
    
                    storyLog(nextNode);
    
                }
            }
    
        }
    
    

};

startChapter();

function musicLog(artist) {

    var response = fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "4dc992ae2emsh1146d01717db61cp161f1djsn3b1ea30c46fb"
        }
    })
    response.then(response => response.json()).then(data => {
        display_lat(data.data[0].preview);
    })
    
    
    function display_lat(link) {
        document.getElementById("musid").src=link
    };

}
document.getElementById("text-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        value = this.value;
        value = value.toLowerCase();
        textInput.value = "";

        chooseOption(value);
    }
    
    

});





startChapter();