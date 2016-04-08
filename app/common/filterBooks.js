export default function(books, user, filter) {
  switch (filter) {
    case 'ALL_BOOKS':
      return books
    case 'USER_BOOKS':
      return books.filter((book) => {
        return book.addedBy == user
      })
    case 'AVAILABLE_BOOKS':
      return books.filter((book) => {
        return (book.addedBy != user) && (book.userRequest == null)
      })
    case 'REQUESTED_BOOKS':
      return books.filter((book) => {
        if (book.userRequest != null) {
          return (book.addedBy == user) && (book.userRequest.approved === false)
        }
        return false
      })
    case 'ON_LOAN_BOOKS':
      return books.filter((book) => {
        if (book.userRequest != null) {
          return (book.addedBy == user) && (book.userRequest.approved === true)
        }
        return false
      })
    case 'PENDING_REQUESTS':
      return books.filter((book) => {
        if (book.userRequest != null) {
          return (book.userRequest.user == user) && (book.userRequest.approved == false)
        }
        return false
      })
    case 'APPROVED_REQUESTS':
      return books.filter((book) => {
        if (book.userRequest != null) {
          return (book.userRequest.user == user) && (book.userRequest.approved === true)
        }
        return false
      })
    default:
      return books
  }
}
