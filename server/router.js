const Authentication = require('./controllers/authentication');
const User = require('./controllers/user');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false } );
const requireSignin = passport.authenticate('local', { session: false} );

module.exports = function(app) {
  /*
  // all routes are handled by client
  app.route('/*').get(function(req, res, next){
    res.sendFile(require('path').resolve('./index.html'));
  })
  */

  // sign up and sign in are handled by auth controller
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.get('/user', requireAuth, User.getuser);
}
