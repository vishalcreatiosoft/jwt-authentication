const mongoose = require('mongoose');

const connectToMongo = () => {

    try{  
        mongoose.connect(process.env.MONGO_URL,()=>{
            console.log('db Connected');
        });
    }
    catch(err){
        console.log('Error in mongodb connection',err);
    }
    
  

}

module.exports = connectToMongo;
