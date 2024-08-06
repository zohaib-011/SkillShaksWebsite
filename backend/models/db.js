const mongoose=require('mongoose')
const mongo_url=process.env.MONGO_CONN;
mongoose.connect(mongo_url)
.then(()=>{
console.log('Mongo Db Connected .')
})
.catch((err)=>{
    console.log('Mongo Db Connection Error ',err)
})