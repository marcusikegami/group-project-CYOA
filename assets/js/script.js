let storylogEl = document.querySelector(".story-log");
const textInput = document.getElementById("text-input");
const interactEl = document.getElementById("interact-container");
const itemsEl = document.getElementById("items-container");

document.getElementById("log-wrapper").addEventListener("click", function(){
    textInput.focus();
});



let credits = 0;

var playerObj = {
    playername: "Adventurer",
        class: { //classtype
            type: "fighter",
            health: 75,
            dT: 1,
            defense: 0.15,

        },
    credits: credits
 
};
var items = {
    knife: {item: "knife", damage: 5}
    
};   

                // nodeDESK: ,
                // nodeGETUP: ,
                // nodeWINDOW: 

var boatNodes = [
            {
                id: 0,
                text: "You are on the bed. By your feet is your DESK, you can GET UP, or peer out your WINDOW.",
                options: [
                    {
                        text: "desk",
                        nextNode: 1           
                    },
                    {
                        text: "get up",
                        nextNode: 2
                    },
                    {
                        text: "window",
                        nextNode: 3
                    },
                    {
                        text: "test",
                        nextNode: 7
                    }
                ]
            },
            {
                id: 1,
                text: "Your desk has has a water bottle in its only drawer. TAKE / LEAVE",
                options: [
                    {
                        text: "take",
                        nextNode: 2,
                        setState: {waterBottle: true, logItem: "You have picked up a water bottle.", text:"Water Bottle"}
                    },
                    {
                        text: "leave",
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
                text: "Outside your window you see the beautiful 'dystopian feudal cyberpunk place', it feels strangely famililar. You turn back around and face the door with anxiety. There is nothing left for you here. LEAVE",
                options:[
                    {
                        text: "leave",
                        nextNode: 5
                    }
                ]
            },
            {
                id: 4,
                text: "",
                options:[

                ]
            },
            {
                id: 5,
                text: "On your way to the door you notice your wallet which holds 50 credits and a knife. You pick them both up and head out of your cabin. confirm LEAVE or look out the WINDOW again.",
                options: [
                    {
                        text: "leave",
                        setState: {knife: true, logItem: "You have picked up a knife and 50 credits", text:"Knife", altercredits: 50},
                        nextNode: 6
                    },
                    {
                        text: "window",
                        nextNode: 3
                    }
                ]
            },
            {
                id: 6,
                text: "END OF DEMO"
            },
            {
                id: 7,
                text: "Testing Logic"
            }
        ];

// PLAYER STATS
   var playerName= document.getElementById("playerName");
   var playerClass= document.getElementById("playerClass");
   var playerHealth= document.getElementById("playerHealth");
   var playerDefense= document.getElementById("playerDefense");
   var playerCredits= document.getElementById("playerCredits");

   playerName.textContent = playerObj.playername;
   playerClass.textContent = playerObj.class.type;
   playerHealth.textContent = playerObj.class.health;
   playerDefense.textContent = playerObj.class.defense *100;
   playerCredits.textContent = credits;




function clearInteractEl() {
    if (interactEl.firstChild){

        interactEl.innerHTML = "";
    };
}

function startChapter() {
items = {};
storyLog(0);

};
function populateInteract(response) {
   var pEl = document.createElement("p");
   pEl.textContent = response;
   interactEl.appendChild(pEl);
};
storyLog = (nodeId) => {
    clearInteractEl();
    var textNode = boatNodes.find(textNode => textNode.id === nodeId);
    console.log(textNode);
    var pEl = document.createElement("p");
    pEl.textContent = textNode.text;
    storylogEl.prepend(pEl);
    textInput.focus();
    showOptions(textNode);


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
   
};
function logItems(logItem) {
    var pEl = document.createElement("p");
   pEl.textContent = logItem;
   storylogEl.prepend(pEl);
};

chooseOption = (value) => {
    
    for (i = 0; i < textNode.options.length; i++) {
        var response = textNode.options[i];
       

        
        if (value === response.text) {
            var nextNode = response.nextNode;
            console.log("possible answer");

            if(response.setState) {

                var logItem = response.setState.logItem
                var addItem = response.setState.text;
                
                credits += response.setState.altercredits;
                logItems(logItem);
                showItems(addItem)


            };

            storyLog(nextNode);
            
        }
    }

}

};
document.getElementById("text-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        
        value = this.value;
        value = value.toLowerCase();
        textInput.value = "";
        
        chooseOption(value);
    }
});





startChapter();




















