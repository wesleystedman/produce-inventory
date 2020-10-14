const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/products');

/*---------- Public Routes ----------*/
// No public routes maybe?


/*---------- Protected Routes ----------*/
router.get('/', productsCtrl.getAll);
router.post('/', productsCtrl.create);
router.put('/:id', productsCtrl.update);
router.delete('/:id', productsCtrl.deleteOne);


module.exports = router;