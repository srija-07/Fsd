const express=require('express')
const router=express.Router()
router.get('/',async(req,res)=>
{
    try{
        const b1=await book1.find()
        res.json(b1)
    }catch(err)
    {
        console.log('error'+err)
    }
})
module.exports=router

router.post('/',async(req,res)=>
{
    const b2=new book1({
            title: req.body.title,
            author: req.body.author,
            purchased: req.body.purchased
        })
        try{
            const b2=await b2.save()
            res.json(b2)
        }catch(err)
        {
            res.send('error' +err)
        }
    
})
module.exports=router