const { Server } = require('socket.io');
const userModel = require("./models/user.model");
const captainModel = require("./models/captain.model");

let io;

function initializeSocket(server) {
    io = new Server(server, {
        cors: {
            origin: 'http://localhost:5173', // Change to your frontend URL
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log(`Socket connected: ${socket.id}`);

        socket.on('join' , async (data) => {
            const { userId , userType}  = data;
            
            if(userType === 'user') {
                await userModel.findByIdAndUpdate(userId , {
                    socketId: socket.id});
            }else if (userType ==='captain') {
                await captainModel.findByIdAndUpdate(userId , { socketId: socket.id});
            }
        });



        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${socket.id}`);
        });
    });
}

function sendMessageToSocketId(socketId, message) {
    if (io) {
        io.to(socketId).emit( message);
    } else {
        console.error('Socket.io is not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };
