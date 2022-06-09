const Router = require('koa-router')
const bountryController = require('./controller/bountry-controller') 
var router = new Router();
router.prefix('/api');

router.post('/bountry/list', bountryController.getBountries);

module.exports = router;