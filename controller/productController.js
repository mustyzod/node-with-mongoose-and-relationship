const ProductModel = require('../models/Product');

//  Get all product
exports.getProducts = (req, res, next) => {
    ProductModel.find()
        .then(result => {
            return res.json({
                result
            });
        })
        .catch(err => console.log(err));
}

//  Get single product
exports.getProduct = (req, res, next) => {
    const prodId = req.params.prodId;

    if (!prodId) {
        return res.status(404).json({
            success: false,
            error: "Missing Required Parameter Id"
        })
    }

    ProductModel.findOne({
            _id: req.params.prodId
        })
        .then(result => {
            return res.json({
                success: true,
                result
            });
        })
        .catch(err => {
            console.log(err);
            return res.json({
                success: false,
                err
            })
        });
}

// Add new product
exports.addProduct = (req, res, next) => {
    const { title, price, description, imageUrl } = req.body;

    const product = new ProductModel({
        title,
        price,
        description,
        imageUrl,
        userId: req.user._id
    });
    product.save()
        .then(result => {
            return res.json({
                product: result
            })
        })
        .catch(err => console.log(err));
}

//  Update product
exports.updateProduct = (req, res, next) => {
    const prodId = req.params.prodId;
    const {
        title,
        price,
        description,
        imageUrl
    } = req.body;
    ProductModel.findById(prodId)
        .then(product => {
            product.title = title;
            product.price = price;
            product.description = description;
            product.imageUrl = imageUrl;
            return product.save()
        })
        .then(result => {
            return res.json({
                success: true,
                msg: "Product updated",
                result
            })
        })
        .catch(err => console.log(err))
}

//  Delete product
exports.deleteProduct = (req, res, next) => {
    const prodId = req.params.prodId
    ProductModel.findByIdAndDelete(prodId)
        .then(result => {
            return res.json({
                success: true,
                msg: "product deleted",
                result
            })
        })
        .catch(err => console.log(err));
}
