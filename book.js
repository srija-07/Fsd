const mongoose=require('mongoose')
const bookschema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        purchased:{
            type:Boolean,
            required:true,
            default:false
        },
    }
)