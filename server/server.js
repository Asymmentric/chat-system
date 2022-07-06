const express=require('express')
const app=express()

const http =require('http').createServer(app)

const port=9999 || process.env.PORT

http.listen(port,()=>{
    console.log(`Server running on ${port}...`);
})

module.exports={
    http,
    app
}