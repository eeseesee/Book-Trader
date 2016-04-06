const axios = require('axios');

// Search Google Books API
exports.search = function(req, res, next) {

  const query = encodeURIComponent(req.body.search);
  const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=' + process.env.GOOGLE_BOOKS_KEY;

  axios.get(googleBooksAPI)
  .then(function (response) {
    console.log(response.data.items)
    res.json(response.data.items)
  })
  .catch(function (response) {
    console.log(response);
    res.status(400).send({ error: 'Error searching for books.'} );
  });

}
