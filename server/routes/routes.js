const path = require('path')
const shortid=require('shortid')
const server=require('../server')
const Room=require('../db/roomSchema')


const route=server.app

route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../client/index.html'))
    // res.send({msg:'Ok'})
})

route.get('/createRoom',(req,res)=>{
    res.status(200).send({msg:'ok',details:'Create Room page, which creates room and directs to the lobby'})
})

route.post('/createRoom',(req,res)=>{
    console.log(req.cookies);
    let room=new Room.room({
        roomId:shortid.generate(),
        members:[req.cookies.user]
    })
    console.log(room.roomId)
    res.send({msg:'Ok'})
})

module.exports={
    route
}