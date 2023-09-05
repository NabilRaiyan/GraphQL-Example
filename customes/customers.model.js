const customers = [
    {
        id: 'cus-01',
        name: 'Raiyan Al Sultan',
        age: 23,
        gender: 'male',
        orders: [
            {
                date: '2012-3-12',
                subtotal: 99.20,
                items: [
                    {
                        product: {
                            id: 'redshoe',
                            description: 'old red shoe',
                            price: 20.34,
                        },
                        quantity: 2,
                    }
                ]
            }
        ]
        
    }
]

function getAllCustomer(){
    return customers;
}

module.exports = {
    getAllCustomer,
}