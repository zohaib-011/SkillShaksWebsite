const ensureAuthenticated = require('../middleware/auth');

const productRouter=require('express').Router();
 
productRouter.get('/',ensureAuthenticated,(re,res)=>{
 res.send([{
    title:"mobile",
    description:"Is made by a china"
 },
 {
   title:"Garments",
   description:"Is made by a Pakistan"
}
])   
})
 
module.exports=productRouter;