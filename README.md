# Chat-Application
A real-time chat application where multiple users across different devices can join and chat with each other. HTML, CSS, and JavaScript have been used for the front-end, and Express.js for the back-end. The communication establishment has been done using Socket.IO.

## Steps to use it

1. Clone or download the repository to your local machine.

2. Install the required npm version and update the local node_modules repository with the versions present in package.json:
   ```
   nodemon install
   ```

3. Run the `server.js` to view the website:
   ```
   nodemon server.js
   ```

4. Once the server started, you might see a message "Server running on port 3000".

5. Open your browser and type localhost:3000, the home page of the chat application will get displayed.

6. Join a room and chat with others!

## Features

- Bidirectional connection between server and client has been established by Socket.IO.
- Rooms have been made so that different groups can communicate together.
