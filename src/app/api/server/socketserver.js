const { Server } = require("socket.io");
const { createServer } = require("http");


const httpServer=createServer(); 
const io=new Server(httpServer,{cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"]
}});

io.on("connection",(socket)=>{
    console.log("User connected");
    socket.on('disconnect',()=>{
        console.log("user disconnected")
    })
})


httpServer.listen(3001,()=>{
    console.log("Server is listening to the port 3001");
})