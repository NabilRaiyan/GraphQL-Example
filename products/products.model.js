const products = [
    {
        id: 'redshoe',
        description: "Red Shoe",
        price: 43.23,
        reviews: []
    },

    {
        id: 't-shirt',
        description: "Black T-Shirt",
        price: 23.23,
        reviews: []

    },

    {
        id: 'pant',
        description: "Black Pants",
        price: 30.23,
        reviews: []

    }

    ]

    function getAllProducts(){
        return products;
    }

    function getProductByPrice(min, max){
        return products.filter((product)=>{
            return product.price >= min && product.price <= max;
        });
    }

    function getProductById(id){
        return products.find((product)=>{
            return product.id === id;
        });
    }

    function addNewProduct(id, description, price){
        const newProduct = {
            id,
            description,
            price,
            reviews: []
        };

        products.push(newProduct);
        return newProduct;
    }

    function addNewProductReview(id, rating, comment){
        const matchedProduct = getProductById(id);
        if (matchedProduct){
            const newProductReview = {
                rating,
                comment,
            };

        matchedProduct.reviews.push(newProductReview);
        return newProductReview;
    }
    }
    module.exports = {
        getAllProducts,
        getProductByPrice,
        getProductById,
        addNewProduct,
        addNewProductReview,
    }