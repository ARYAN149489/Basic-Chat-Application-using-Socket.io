const express = require("express");
const { createServer } = require("http");
const { join } = require("path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

//Serve the static files from the public folder
app.use(express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection",(socket)=>{
  console.log("A user connected");

  socket.emit("messageFromServer","Hello from Server");

  socket.on("messageFromClient",(message)=>{
    // console.log(message);
    // Broadcast the msg to all except the sender
    socket.broadcast.emit("messageFromServer",message);
  })
  socket.emit("greeting",'Greeting from server',(response)=>{
    console.log("Recieved msg by client ",response);
  });
})
//start the server
server.listen(PORT, console.log("Server is up and running on port", PORT));