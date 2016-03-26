exports.getuser = function(req, res, next) {
  const fetchedUser = { _id: req.user._id, dispName: req.user.dispName, email: req.user.email }
  res.json(fetchedUser);
}
