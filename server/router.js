const Authentication = require('./controllers/authentication');
const User = require('./controllers/user');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false } );
const requireSignin = passport.authenticate('local', { session: false} );

module.exports = function(app) {
  // sign up and sign in are handled by auth controller
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  // fetching and changing user account is handled by user controller
  app.get('/user', requireAuth, User.getuser);
  app.put('/user', requireAuth, User.updateuser);
}
