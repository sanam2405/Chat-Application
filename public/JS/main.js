const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const socket = io();
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");
const currentUser = document.getElementById("identify-user");

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

// Join chatroom
socket.emit("joinRoom", { username, room });

// Get room and users
socket.on("roomUsers", ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
  displayIndividualUser(username);
});

// Message from server
socket.on("message", (message) => {
  // Start listening for the socket event with the specified name "message"
  console.log(message);
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight; // to always be at the bottom
});

// Message submit
chatForm.addEventListener("submit", (e) => {
  // e = event parameter
  e.preventDefault(); // prevent from submitting in a file

  // Get message text
  let msg = e.target.elements.msg.value; // Get value of the input with id = msg. The message typed by a user

  msg = msg.trim();

  if (!msg) {
    return false;
  }

  // Emit message to server
  socket.emit("chatMessage", msg); // Send the message to the users

  // Clear input
  e.target.elements.msg.value = ""; // After sending the message, the typing space is empty instead of showing the same message typed
  e.target.elements.msg.focus();
});

// outputMessage function
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  const p = document.createElement("p");
  p.classList.add("meta");
  p.innerText = message.username;
  p.innerHTML += `<span>${message.time}</span>`;
  div.appendChild(p);
  const para = document.createElement("p");
  para.classList.add("text");
  para.innerText = message.text;
  div.appendChild(para);
  document.querySelector(".chat-messages").appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.username;
    userList.appendChild(li);
  });
}

function displayIndividualUser(user) {
  currentUser.innerHTML = "Hello " + user;
}
