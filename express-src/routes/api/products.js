const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/products');

/*---------- Public Routes ----------*/
// No public routes maybe?


/*---------- Protected Routes ----------*/
router.get('/', checkAuth, productsCtrl.getAll);
router.post('/', checkAuth, productsCtrl.create);
router.put('/:id', checkAuth, productsCtrl.update);
router.delete('/:id', checkAuth, productsCtrl.deleteOne);


/*---------- Helper Functions ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;