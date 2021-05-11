const router = require('express').Router();

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  res.render('../views/login.ejs');
});

router.get('/register', (req, res) => {
  res.render('../views/register.ejs');
});

module.exports = router;
