const path = require('path')
const server=require('../server')

const route=server.app

route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../client/index.html'))
    // res.send({msg:'Ok'})
})

module.exports={
    route
}