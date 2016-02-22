var jwt = require('jsonwebtoken');  
var _ = require('lodash');

var secret = 'the cobra command';

module.exports = {
  authorize: function (req, res, next){
    console.log('Auth is being called...');
    var token = req.body.token;
    if(token){
      jwt.verify(token, secret, function(err, decoded){
        if(err){
          console.error(err)
          return res.status(403).send('There was an error authorizing token')
        }else{
          token = decoded;
          console.log(token);
          return next();
        }
      })
    } else {
      res.status(403).send('Token not provided');
    }
  }, 
  createToken: function (user){
    return jwt.sign(_.omit(user, 'password'),secret,{
      expiresIn: 24 * 60 * 60
    })
  }
};