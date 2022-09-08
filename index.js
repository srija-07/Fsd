const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost/booksDB'
const app=express()
mongoose.connect(url)
const con=mongoose.connection
con.on('open',function()
{
    console.log("database connected")
})
app.use(express.json())
const bookRouter=require('./routes/books.js')
app.use('/books',bookRouter)
app.listen(9000,function()
{
    console.log("server started")
})

