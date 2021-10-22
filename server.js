const observable = require("./observable.js")
const expressInstance = require("express");
const path = require("path");

const app = expressInstance();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(expressInstance.static(path.join(__dirname+"/public")));

var flag = false;
while(flag==false){
	io.on("connection", observable.register);
	flag = true;
}

io.on("connection", observable.publish);

// asyncFunc();

// Runs on local host port 5000
server.listen(3001);