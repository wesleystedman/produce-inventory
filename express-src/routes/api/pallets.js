const express = require('express');
const router = express.Router();
const palletsCtrl = require('../../controllers/pallets');

/*---------- Public Routes ----------*/
// No public routes maybe?


/*---------- Protected Routes ----------*/
router.get('/', checkAuth, palletsCtrl.getAll);
router.post('/', checkAuth, palletsCtrl.create);
router.put('/:id', checkAuth, palletsCtrl.update);
router.delete('/:id', checkAuth, palletsCtrl.deleteOne);


/*---------- Helper Functions ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;