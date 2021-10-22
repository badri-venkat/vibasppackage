var subscribers = new Array();

function register(socket){
	subscribers.push(socket);
}

function notify(socket){
	socket.on("newuser", function (username) {
		socket.broadcast.emit("update", username + " has joined the chat!");
	});
	socket.on("exituser", function (username) {
		socket.broadcast.emit("update", username + " has left the chat");
	});
	socket.on("chat", function (message) {
		socket.broadcast.emit("chat", message);
	});
}

function publish(){
	subscribers.forEach(socket => {
		notify(socket);
	});
}

module.exports = {register, publish};