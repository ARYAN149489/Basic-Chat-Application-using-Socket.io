const socket = io();

const sendButton = document.querySelector(".send-button");
const messageArea = document.querySelector("#messageArea");
const messageInput = document.querySelector("#messageInput");

function addMessage(message,sender){
  const newDiv = document.createElement('div');
  newDiv.className = `message ${sender}-message`;
  newDiv.textContent = message;
  messageArea.appendChild(newDiv);
  messageArea.scrollTop = messageArea.scrollHeight;
}

socket.on("messageFromServer",(message)=>{
  addMessage(message,'server');
})

function sendMessage(){
  const msg = messageInput.value.trim();
  if(msg){
    socket.emit("messageFromClient",msg);
    addMessage(msg,'client');
    messageInput.value = "";
  }
}

sendButton.addEventListener("click",sendMessage);

socket.on('greeting',(message,callback)=>{
  console.log(message);
  // do stuff with msg
  callback({
    status:'recieved',
    message:'Thanks',
    timeStamp: new Date()
  })
})