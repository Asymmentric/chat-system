const mongoose=require('mongoose')
const User=require('./usersSchema')
const Room=require('./roomSchema')
const db=mongoose.connect('mongodb://localhost:27017',{
    dbName:'myDb'
})

    // const user=new User.user({
    //     name:'Easy',
    //     userId:'echo'
    //     // dateCreated: 

    // })
    //  user.save()



module.exports={
    db 
}