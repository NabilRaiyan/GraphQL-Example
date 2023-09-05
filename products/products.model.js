const products = [
    {
        id: 'redshoe',
        description: "Red Shoe",
        price: 43.23,
    },

    {
        id: 't-shirt',
        description: "Black T-Shirt",
        price: 23.23
    },

    {
        id: 'pant',
        description: "Black Pants",
        price: 30.23
    }

    ]

    function getAllProducts(){
        return products;
    }

    module.exports = {
        getAllProducts
    }