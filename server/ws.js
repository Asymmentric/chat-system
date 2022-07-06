const server=require('./server')

const websocket=require('websocket').server

const ws=new websocket({
    httpServer:server.http,
    autoAcceptConnections:false
})
let clients=[]

ws.on('request',(wsReq)=>{
    // console.log(wsReq.httpRequest.headers.from);
    clients.push({
        userId:wsReq.httpRequest.headers.from,
        id:wsReq.key,
        wsConn:wsReq.accept()

    })
    
    console.log(clients.length);
    clients.forEach(client => {
        console.log(client.userId,' ',client.id)
    });
})

ws.on('connect',(wsConn)=>{
    // console.log(wsConn);
    wsConn.on('message',(msg)=>{
        console.log(JSON.parse(msg.utf8Data));
        let incomingMsg=JSON.parse(msg.utf8Data)
        clients.forEach(client => {
            if(incomingMsg.to===client.userId) client.wsConn.send(JSON.stringify(incomingMsg))
        });
        
    })
    
})
ws.on('close',(code,desc)=>{
    // console.log(code);
    clients.forEach(client => {
        if(client.wsConn.state==='closed'){
            console.log(client.id+' disconnected')
            clients.pop(client)
        }
    });
})


module.exports={
    ws
}