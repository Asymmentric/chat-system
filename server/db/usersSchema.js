const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    dateCreated:{
        type: Date,
        default: ()=>{
            let time=new Date()
            return time.getTime()
        }
    },
    status:{
        type:Boolean,
        default:true
    }
})



const user=mongoose.model('users',userSchema,'users')

module.exports={
    user
}


