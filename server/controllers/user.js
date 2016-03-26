const User = require('../models/user');
const mongoose = require('mongoose');

exports.getuser = function(req, res, next) {
  // Return authenticated user, sans password

  res.json(req.user);
}

exports.updateuser = function(req, res, next) {
  console.log(req.body.user)

  User.findOne({
      _id: mongoose.Types.ObjectId(req.body.user._id)
    }, function(err, existingUser) {
      //check if user is in database
      if (err) {
        return res.status(422).send({ error: 'Error accessing account. Try again later' })
      }

      if (existingUser) {
        //merge changes into existing user

        const updatedUser = Object.assign(existingUser, req.body.user);
        updatedUser.save(function(err) {
          if (err) {
            return res.status(400).send({ error: 'Error updating account. Try again later' })
          }

          return res.json(updatedUser);
        });
      }
      else {
        //could not find user to update in db
        return res.status(400).send({ error: 'Hmm...Cannot locate account. Try again later' })
      }
    });
}
