import React from 'react'

export default () => {
  return (
        <div className="services container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Services</h2>
              <h3 className="section-subheading text-muted">Book Trader makes collecting and sharing books easy.</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x fa-primary"></i>
                        <i className="fa fa-book fa-stack-1x fa-inverse"></i>
                      </span>
              <h4 className="service-heading">Catalogue</h4>
              <p className="service-tag text-muted">Keep track of your library online.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x fa-primary"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
              <h4 className="service-heading">Browse</h4>
              <p className="service-tag text-muted">See all the books our users own.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x fa-primary"></i>
                        <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
              <h4 className="service-heading">Trade</h4>
              <p className="service-tag text-muted">Request to borrow books.</p>
            </div>
          </div>
        </div>
  )
}
