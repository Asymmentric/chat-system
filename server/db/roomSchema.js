const mongoose=require('mongoose')

const roomSchema=new mongoose.Schema({
    roomId:{
        type:String,
        required:true
    },
    members:[],
    dateCreated:{
        type: Date,
        default: ()=>{
            let time=new Date()
            return time.getTime()
        }
    }
})

const room=mongoose.model('rooms',roomSchema,'rooms')

module.exports={
    room
}