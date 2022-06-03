const admindb = require('../dbQuery/admindbQuery');

const adminHandler = {};


/**
 * @method adminRegistration
 * @author vishal srivastava
 **/
adminHandler.adminRegistration = async(req, res) => {
    
    const requestData = {
            email : req.body.email,
            name : req.body.name,
            password : req.body.password
        }

    const result = await admindb.registration(requestData);

    return { success : true , result : `Admin registered successfully ${result}` }

}

/**
 * @method adminLogin
 * @author vishal srivastava
 **/
adminHandler.adminLogin = async(requestData) => {
    
    try{
     
        const data = {
            email : requestData.email,
            password : requestData.password
        }
       
        const checkEmailExists = await Admin.findOne({email : data.email});
        console.log('checkEmailExists',checkEmailExists);
        if(checkEmailExists){
            return { success : true , result : 'Admin Exists with this email'};
        }
        else{
            return { success : false , result : 'Invalid Email'};
        }
    }
    catch(err){
        return  { success : false , result : `Error in admin login`};
    }

}



module.exports = adminHandler;