const productModel = require('./products.model');

module.exports = {
    Query: {
        products: ()=>{
            return productModel.getAllProducts();
        },

        // as we are not using parent argument in the function so graphql convention is to use _ to replace that argument if we don't use an earlier argument

        productByPrice: (_, args)=>{
            return productModel.getProductByPrice(args.min, args.max);
        },

        productById: (_, args)=>{
            return productModel.getProductById(args.id);
        },
    },

    Mutation: {
        addNewProduct: (_, args)=>{
            return productModel.addNewProduct(args.id, args.description, args.price);
        },

        addNewProductReview: (_, args)=>{
            return productModel.addNewProductReview(args.id, args.rating, args.comment);
        }
    }
}