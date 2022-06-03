const Admin = require('../models/adminModel');

const admindb = {};


admindb.registration = async(registationData) => {
    const register = new Admin(registationData)
    return await register.save()
                    .then((response)=>{return response})
                    .catch((error)=> {return error});  
}





module.exports = admindb;