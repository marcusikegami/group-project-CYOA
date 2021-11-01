let storylogEl = document.querySelector(".story-log");
const textInput = document.getElementById("text-input");
const interactEl = document.getElementById("interact-container");
const itemsEl = document.getElementById("items-container");
var startScreen = document.getElementById("start-screen");
var charPage = document.getElementById("char-page");
var mainPageScreen = document.getElementById("main-page");
var selectCharOne = document.getElementById("charOne-button");
var selectCharTwo = document.getElementById("charTwo-button");

var quess = "";
var ans = "";

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
                text: "As you step through these picturesque environs, your skin warmed and invigorated by the welcomed explosion of nature's forces, a gentle calm descends upon you. A peace more deep than any you have ever felt caresses your conscience as the bright fileds of warmth spread before you. Gradually, a weight builds behind your eyes and you find your limbs growing slack. A determination calls to you, pulling you downwards. As if into the plains themself. Aroused by the curiousity of your predicament you push yourself deeper into this beautiful nightmare. The calm gait with which you had started, shambles into a slurred sleepy wobble, and shattering into a frenzied lurch before you finally collapse on hands and knees spread out beneath the staring sky in supplication. A shadow falls over you. From within a primitive sensations burns, commanding you to GAZE upon the entity that has come before you.",
                options: [
                    {
                        text: "gaze",
                        nextNode: 2
                    }
                ]
            },
            {
                id: 2,
                music: "Johann Sebastian Bach",
                text: "From within the shadow that now looms over you a burning presence sears against not only your flesh, but the very threshold of your mind quakes. Layers of consciousness strip and peel away beneath its enshackling contemplation. As though a child caught before an irritable authority you mewl and shrivel inwards, caving unto yourself as you AWAIT your penance.",
                options: [
                    {
                        text: "wait",
                        nextNode: 3,
                    }
                ]
            },
            {


                id: 3,
                music: "Johann Sebastian Bach",
                text: "Nothing happens. Darkness, a comforting oblivion. Peace. For a moment you lie limbs adrift and thoughts a gently flowing trickle of contemplation beholding nothing but quiet serentity. Even this does not last. Eventually you visciously arrive in some semblance of reality, jostled upright and sheathed in an grimy musk of sweat from a harried and strenuous sleep. At the bed side a smattering of personal accoutrements most notably your ADARI blade, the GLINTEL locket, and a parchment of MEDICINAL herb. Without you tailored coat it's unlikely you'll be able to carry all of them. ",
                options:[
                    {
                        text: "adari",
                        setState:{adari: true, note1: true, logItem: "You have picked up your Adari,", text:"Adari"},
                        nextNode: 4,
                    },
                    {
                        text: "medicinal",
                        setState:{medicine: true, note1: true, logItem: "You have picked up the parchemnt,", text:"Medicine"},
                        nextNode: 5,
                    },
                    {
                        text: "glintel",
                        setState:{locket: true, note1: true, logItem: "You have picked up your locket,", text:"Locket"},
                        nextNode: 6
                    }
                ]
            },
            {
                id: 4,
                music: "Johann Sebastian Bach",
                text: "Reverently you sheath the blade at yourside. Still the GLINTEL locket and the MEDICINAL pouch remain.",
                options:[
                    {
                        text: "glintel",
                        setState:{locket: true, note1: true, logItem: "You have picked up your locket,", text:"Locket"},
                        nextNode: 7,
                    },
                    {
                        text: "medicinal",
                        setState:{medicine: true, note1: true, logItem: "You have picked up the parchemnt,", text:"Medicine"},
                        nextNode: 7,
                    }
                ]
            },
            {
                id: 5,
                music: "Johann Sebastian Bach",
                text: "Carefully you tuck the parchemnt of herb against the hem of your pants before considering the remaining items. Your personal ADARI gleams in the warm burning light of the evening. Similarly the GLINTEL locket dances with rippling affectation as the rooms bobs and sways.",
                options: [
                    {
                        text: "adari",
                        setState:{adari: true, note1: true, logItem: "You have picked up your Adari,", text:"Adari"},
                        nextNode: 7
                    },
                    {
                        text: "glintel",
                        setState:{locket: true, note1: true, logItem: "You have picked up your locket,", text:"Locket"},
                        nextNode: 7
                    }

                ]
            },
            {
                id: 6,
                music: "Johann Sebastian Bach",
                text: "In a hurried rustle of metalic links the locket falls weightlessly around your neck. The familiar cold of the metal presses gently against your chest as you consider the sharp ADARI and the soothing MEDICINAL herbs arrayed before you.",
                options: [
                    {
                        text: "adari",
                        setState:{adari: true, note1: true, logItem: "You have picked up your Adari,", text:"Adari"},
                        nextNode: 7,
                    },
                    {
                        text: "medicinal",
                        setState:{medicine: true, note1: true, logItem: "You have picked up the parchemnt,", text:"Medicine"},
                        nextNode: 7,
                    }
                ]
            },
            {
                id: 7,
                music: "Wolfgang Amadeus Mozart",
                text: "With your items collected a cursory glance around the room informs you that you have awoken in your chambers. At the WINDOW a orange sky rages in the fading evening. The unsteady FEELING of the rooms warbling and softly shifting motions recollects the information of having traveled on some vessel. Most notably the two exits of the access HATCH and the DOOR seem to have been jostled by some hitherto unknown presence. ",
                options: [
                    {
                        text: "window",
                        nextNode: 8,
                    },
                    {
                        text: "feeling",
                        nextNode: 9,
                    },
                    {
                        text: "door",
                        nextNode: 10,
                    },
                    {
                        text: "hatch",
                        nextNode: 11,
                    },
                ]
            },
            {
                id: 8,
                music: "Wolfgang Amadeus Mozart",
                text: "Outside the sky is ablaze in fiery yellows and near crimson reds as the underside of the few prominent clouds devour the warmth of the sun in their sea of near-dark indigo. A moment your breath catches and you are back in your dream, bare before some cthonic entity vaster than even the impenetrable heavens. Looking down at the gentle swell the water glimmmers and shines as small waves lap playfully into the suns embrace. The ROOM waits behind you.",
                options: [
                    {
                        text: "room",
                        nextNode: 7,
                    }
                ]
            },
            {
                id: 9,
                music: "Wolfgang Amadeus Mozart",
                text: "Though the near rhythmic thrum of the tide against the hull and its casual movements remains nearly intact a definitive distinction is present in the groaning shudder that seems to resonate through the vessels frame. It is possible that your journey, and arrival, have not been wholly untoward. Around you the ROOM remains an infallible calm.",
                options: [
                    {
                        text: "room",
                        nextNode: 7,
                    }
                ]
            },
            {
                id: 10,
                music: "Wolfgang Amadeus Mozart",
                text: "The small room takes only a moment to cross. After a few unhurried strides you stare out the doorsways threshold. A small cargo hallway eerily dim and unkempt reaches out - clawing. You step back a moment, your breath quickening before your training reasserts itself. The comforting presence of the ROOM remains, but the path forward is best TREAD carefully.",
                options: [
                    {
                        text: "room",
                        nextNode: 7,
                    },
                    {
                        text: "tread",
                        nextNode: 12,
                    }
                ]
            },
            {
                id: 11,
                music: "Wolfgang Amadeus Mozart",
                text: "Idling around the length of your bed you stare down at the small access hatch. Normally reserved for elite passengers and those few well acquainted with the vessel the tiny passage way has been left unlocked. Though the ROOM remains in relative calm, the PATH before you is of interest.",
                options: [
                    {
                        text: "room",
                        nextNode: 7,
                    },
                    {
                        text: "path",
                        nextNode: 13,
                    }
                ]
            },
            {
                id: 12,
                music: "Igor Stravinsky",
                text: "A sworn member of the Voltanese Sword Arm you defy the swelling unease that builds within you as you first sojourn beyond the confines of your amiable room. A few halting steps into the darkness and you pause, a quick glance back. As you do so the Door slams with an uncanny crazck. The hallway and BEYOND is your only solace now.",
                options: [
                    {
                        text: "beyond",
                        nextNode: 14,
                    }
                ]
            },
            {
                id: 14,
                music: "Igor Stravinsky",
                text: "",
                options: [
                    {
                        text: "beyond",
                        nextNode: 14,
                    }
                ]
            }

        ];

// PLAYER STATS
var charOptions = {
    characterOne: {
        classType: "FIGHTER",
        classHealth: 100,
        classDefense: .5,
    },
    characterTwo: {
        classType: "ROGUE",
        classHealth: 75,
        classDefense: .15,
    },
    characterThree: {
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

charOneClass.textContent = charOptions.characterOne.classType;
charOneHealth.textContent = charOptions.characterOne.classHealth;
charOneDefense.textContent = charOptions.characterOne.classDefense * 100;
//    playerCredits.textContent = credits;
charTwoClass.textContent = charOptions.characterTwo.classType;
charTwoHealth.textContent = charOptions.characterTwo.classHealth;
charTwoDefense.textContent = charOptions.characterTwo.classDefense * 100;

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
    var userNameInput = document.getElementById("name-input");
    var userName = userNameInput.value;

    
    choseOneName.textContent = userName;
    choseOneClass.textContent = charOptions.characterOne.classType;
    choseOneHealth.textContent = charOptions.characterOne.classHealth;
    choseOneDef.textContent = charOptions.characterOne.classDefense * 100;
    startChapter();
});

document.getElementById("charTwo-button").addEventListener("click", function () {
    charPage.setAttribute("class", "hide");
    mainPageScreen.setAttribute("class", "show");
  
    var choseTwoName = document.getElementById("game-name");
    var choseTwoClass = document.getElementById("game-class");
    var choseTwoHealth = document.getElementById("game-health");
    var choseTwoDef = document.getElementById("game-defense");
    var userNameInput = document.getElementById("name-input");
    var userName = userNameInput.value;


    choseTwoName.textContent = userName;
    choseTwoClass.textContent = charOptions.characterTwo.classType;
    choseTwoHealth.textContent = charOptions.characterTwo.classHealth;
    choseTwoDef.textContent = charOptions.characterTwo.classDefense * 100;
    startChapter();
});

document.getElementById("charThree-button").addEventListener("click", function () {
    charPage.setAttribute("class", "hide");
    mainPageScreen.setAttribute("class", "show");
  
    var choseThreeName = document.getElementById("game-name");
    var choseThreeClass = document.getElementById("game-class");
    var choseThreeHealth = document.getElementById("game-health");
    var choseThreeDef = document.getElementById("game-defense");
    var userNameInput = document.getElementById("name-input");
    var userName = userNameInput.value;


    choseThreeName.textContent = userName;
    choseThreeClass.textContent = charOptions.characterThree.classType;
    choseThreeHealth.textContent = charOptions.characterThree.classHealth;
    choseThreeDef.textContent = charOptions.characterThree.classDefense * 100;
    startChapter();
});



function clearInteractEl() {
    if (interactEl.firstChild) {

        interactEl.innerHTML = "";
    };
}


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
    text = textNode.text;
    
    storylogEl.prepend(pEl);
    textInput.focus();
    musicLog(artist);
    showOptions(textNode);
    audio(text);


    function showOptions(textNode) {
        

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

function audio(text) {

// test adding this comment to check for an error

    fetch("https://api.voicerss.org/?key=667ae473f8df46b7984e35ffe16c18ea&hl=en-us&v=john&c=MP3&f=16khz_16bit_stereo&src=" + text,)
    .then(response => {
        speech(response.url);
    })

    
};

function speech(link) {
    document.getElementById("audio").src = link;

};



function startChapter() {

items = {};
storyLog(0);
musicLog("Ludwig Van Beethoven");
};


document.getElementById("reset-button").addEventListener("click", function(){
    location.reload(true);
});

document.getElementById("save-button").addEventListener("click", function(){
    
    saveGame();
});


function saveGame() {
var player = JSON.stringify(playerObj);
localStorage.setItem("Player Stats", player);



var lastLog = storylogEl.firstChild.textContent;
localStorage.setItem("Last Log", lastLog);
};


function loadGame() {

    var playerGrab = localStorage.getItem("Player Stats");
JSON.parse(playerGrab);
console.log(playerGrab);

var storyLogGrab = localStorage.getItem("Last Log");
console.log(storyLogGrab);
    
};