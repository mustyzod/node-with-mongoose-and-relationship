const app = require('express');
const router = app.Router();

const ProductController = require('../controller/productController');

//@route GET /api/v1/productss
router.get('/', ProductController.getProducts);

//@route GET /api/vi/product/:id
router.get('/:prodId', ProductController.getProduct)

//@route POST /api/vi/product/create
router.post('/', ProductController.addProduct)

//@route PUT /api/vi/product/:prodId
router.put('/:prodId', ProductController.updateProduct)

//@route DELETE /api/vi/product/:prodId
router.delete('/:prodId', ProductController.deleteProduct)

module.exports = router;