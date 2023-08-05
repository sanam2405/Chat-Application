const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
} = require("./utils/users");

const app = express();
const server = http.createServer(app); // to use directly using socket.io
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// When client joins
io.on("connection", socket => {
    // Happens inside a specific room
    socket.on("joinRoom", ({ username, room }) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);

        // Welcome a new user
        socket.emit("message", formatMessage("ChatBot", "Welcome to chat app")) // To send a message named "message" to any one of the connected users

        // Notify a new user has joined to the other users
        socket.broadcast.to(user.room).emit("message", formatMessage("ChatBot", `${user.username} has joined the chat`));  // New user not notified
        // The to() function here is used to send the message in the room where the user has joined

        // Send users and room info
        io.to(user.room).emit("roomUsers", {
            room: user.room,
            users: getRoomUsers(user.room),
        });
    });
    // console.log("New user joined")


    // User disconnected
    socket.on("disconnet", () => {
        const user = userLeave(socket.id);
        io.to(user.room).emit("message", formatMessage("ChatBot", `${user.username} has left the chat`))
    })

    // Listen for chat message
    socket.on("chatMessage", msg => {
        // console.log(msg);
        const user = getCurrentUser(socket.id);
        if (user) {
            io.to(user.room).emit("message", formatMessage(user.username, msg)) // Sent the message to others users
        }

    })

    // io.emit(); // Send message to all the connected users
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));