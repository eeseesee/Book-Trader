import React from 'react'

export default () => {
  return (
    <div className="about container">
      <h1 className="about-heading center">About</h1>
      <p className="about-subheading center">Thanks for visting!</p>
      <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
        <p className="about-text">
          Book Trader is a full stack JavaScript application
          built for the Manage a Book Trading Club Dynamic Web Application Project
          at Free Code Camp. Feel free to poke around - make an account, view books
          added by other users. As an authenticated user, you can add books, make,
          approve and delete requests. You can even delete your account, so there is
          no long term commitment <i className="fa fa-smile-o"></i>
        </p>
        <p className="about-text">
          Did you find a bug? Want to know more about the tech stack? Interested in
          seeing what else I have built? Check out the Book Trader code and my other
          repos on my github page:
          <a href="https://github.com/eeseesee" target="_blank"> eeseesee</a>.
        </p>
      </div>
    </div>
  )
}
