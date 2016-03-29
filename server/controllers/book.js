const Book = require('../models/book');
const mongoose = require('mongoose');

exports.addbook = function(req, res, next) {
  const newBook = new Book(req.body)
  newBook.addedBy = mongoose.Types.ObjectId(req.user._id);

  newBook.save(function(err, book) {
    if (err) {
      return res.status(400).send({ error: 'Error adding book to database.'} )
    }

    // Respond to request with new book
    res.json(book);
  });

}

exports.deletebook = function(req, res, next) {
  const bookID = req.body._id;

  Book.find({ _id: bookID })
    .remove()
    .exec(function(err, data) {
      if (err) {
        return res.status(400).send({ error: 'Error removing book.'} )
      }
      return res.json({ _id: bookID });
    })
}

exports.getallbooks = function(req, res, next) {
  const userID = req.user._id;

  Book.find({ addedBy: { $ne: mongoose.Types.ObjectId(userID) }}, function(err, data) {
      if (err) {
        return res.status(400).send({ error: 'Error fetching all books.'} )
      }
      // return all books
      return res.json(data);
    })
}

exports.getbooksbyuser = function(req, res, next) {
  const userID = req.user._id;

  Book.find({ addedBy: mongoose.Types.ObjectId(userID) }, function(err, data) {
      if (err) {
        return res.status(400).send({ error: 'Error fetching user books.'} )
      }
      // return all books
      return res.json(data);
    })
}

exports.deletebooksbyuser = function(req, res, next) {
  const userID = req.user._id;

  Book.find({ addedBy: mongoose.Types.ObjectId(userID) })
    .remove()
    .exec(function(err, data) {
      if (err) {
        return res.status(400).send({ error: 'Error removing documents.'} )
      }
      return res.json({ _id: userID });
    })

}
