const users = [];

// Join user to chat
function userJoin(id, username, room) {
    const user = { id, username, room }; // create the user object

    // Check if a user with the same name is already present in that room
    const currentRoomUsers = getRoomUsers(room);
    let uniqueUsername = username;
    let counter = 1;

    while (currentRoomUsers.some(user => user.username === uniqueUsername)) {
        uniqueUsername = `${username}_${counter}`;
        counter++;
    }

    user.username = uniqueUsername; // Assign the unique username to the user

    if (counter > 1) {
        console.log(`Username already exists. Generated unique username: ${uniqueUsername}`);
    }

    users.push(user);
    return user;
}


// Get current user
function getCurrentUser(id) {
    return users.find(user => user.id === id); // user ID is unique
}

// User leaves chat
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room users
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
};