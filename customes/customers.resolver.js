const customerModel = require('./customers.model');


module.exports = {
    Query: {
        customers: async ()=>{
            const customer = await Promise.resolve(customerModel.getAllCustomer());
            return customer

        } 
    }
}