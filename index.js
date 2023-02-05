const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

app.use(cors());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
	res.send('Running');
});


const users = {};

io.on("connection", (socket) => {
	if (!users[socket.id]) {
        users[socket.id] = socket.id;
    }
	socket.emit("yourID", socket.id);
	socket.emit("me", socket.id);

	io.sockets.emit("allUsers", users);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
		delete users[socket.id];
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));