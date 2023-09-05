
const orders =  [
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

function getAllOrders(){
    return orders;
}

module.exports = {
    getAllOrders,
}