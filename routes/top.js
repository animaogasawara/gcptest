var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AnimaTest' });
});

module.exports = router;


// Slackへメッセージ送信
/*
module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var userText = req.body.text;
  var botPayload = {
    text : 'Hello, ' + userName + '! (send massage:' + userText + ')'
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
*/