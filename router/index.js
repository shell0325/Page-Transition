var router = require('express').Router();
var loginRouter = require('../router/login');
var registerRouter = require('../router/register');

router.use('/', loginRouter);
router.use('/register', registerRouter);

module.exports = router;
