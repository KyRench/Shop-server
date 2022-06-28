const Router = require('express');
const { getAll } = require('../controllers/brandController');
const router  = new Router();
const brandController = require('../controllers/brandController')

router.post('/', brandController.create)
router.get('/',getAll)
module.exports = router