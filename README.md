# Socket.IO Chat Server

A real-time chat application built with Node.js, Express, and Socket.IO.

## Features

- Real-time bidirectional communication
- Broadcast messages to all connected clients
- Clean and responsive UI

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
node server.js
```

The server will run on `http://localhost:3000`

## Technologies Used

- **Express.js** - Web framework
- **Socket.IO** - Real-time WebSocket communication
- **HTML/CSS/JavaScript** - Frontend

## Project Structure

```
socket-server/
├── server.js          # Server-side code
├── public/
│   ├── index.html     # Main HTML file
│   ├── css/
│   │   └── styles.css # Styling
│   └── js/
│       └── chat.js    # Client-side Socket.IO logic
└── package.json
```