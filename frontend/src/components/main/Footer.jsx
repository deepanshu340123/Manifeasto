import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-twitter" />
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-linkedin" />
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-4">
              {/* Grid row */}
              {/* <div className="mt-3"> */}
              {/* Grid column */}

              {/* Grid column */}
              {/* Grid column */}

              {/* Grid column */}
              {/* Grid column */}

              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto  mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 text-dark">Contact</h6>

                <p>
                  <i className="fas fa-home me-3" /> Lucknow, UP 226028, India
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  info@companyprofile.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
            {/* </div> */}
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div className="text-center p-4 bg-dark text-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
            © 2023 Copyright:
            <span className="text-reset fw-bold">
              <nbsp>Company Profile</nbsp>
            </span>
          </div>
          {/* Copyright */}
        </footer>
  )
}

export default Footer