//Naming Varibles
const userInput = document.getElementById("userInput");
const messagecontainer = document.getElementById("Messagescontainer");

//Adding the submit event listiner on chat form
document.getElementById("chatForm").addEventListener("submit", sendMessage);

//fucion to send message
function sendMessage(event) {
    event.preventDefault(); //prevent form from refreshing
    const message = userInput.value; //message var is the value of th text input in the <input>000</input>

    if (userInput.value.trim() !== "") {
        if (message === "//clear") {
            messagecontainer.innerHTML = "";
            console.log("CHat cleard")
        }

        const messagebubble = document.createElement("div"); // creating message bubble
        messagebubble.textContent = message; //MAkaing the message bubble equals to the txt contents of the main message var
        messagebubble.classList.add("message", "user"); //adding a class message to new html tag for styling in css

        messagecontainer.appendChild(messagebubble); //appening new html element to messages container

        userInput.value = ""; // Clear Inpt AREA
    } else {
        alert("Input is empty"); //Checking if there is no input
    }
}
