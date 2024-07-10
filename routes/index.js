var express = require('express');
var router = express.Router();

const messages = [
  { 
    user: "Lucas",
    text: "Hi there!",
    added: new Date()
  },
  {
    user: "Charles",
    text: "Hello World!",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {messages});
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  let {name, message} = req.body;
   messages.push({user: name, text: message, added: new Date()})
  res.redirect('/',)
})

module.exports = router;
