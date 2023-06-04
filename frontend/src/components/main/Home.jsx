import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
        alt=""
        className="w-100"
        width="100px"
        height="500px"
      />

      <div className="container">
      <h1 className="text-center my-5">WELCOME TO OUR WEBSITE</h1>

      <p className="mt-3 text-center fs-5">
        Backlinks are an essential aspect of search engine optimization (SEO) and play a significant role in determining the credibility and authority of a website. They are links
        that originate from external websites and direct users to your site. Search engines view backlinks as endorsements or votes of confidence for your website, indicating its
        relevance and value to users. The key to successful backlink building is to focus on quality, relevance, and establishing genuine connections within your industry. By
        incorporating these strategies into your SEO efforts, you can improve your website's visibility, organic traffic, and overall online presence.
      </p>

      <div className="text-center">
        <Link to="/main/signup">
          <button className="btn btn-primary rounded-pill mt-2">Get Started</button>
        </Link>
      </div>

      <div className="row mt-3">
        <div className="col-md-5 card mt-2 mx-auto">
          <div className="card-body">
            <h3 className="card-title border border-danger border-3 rounded-pill d-inline px-3">About Us</h3>
            <p className="card-text my-2">
              At Company Profile, we are dedicated to providing backlinks to rank your website. With 3+ of experience in the industry, we have built a strong reputation for
              delivering in SEO, Backlinks.
            </p>
          </div>
        </div>

        <div className="col-md-5 card mt-2 mx-auto">
          <div className="card-body">
            <h3 className="card-title border border-danger border-3 rounded-pill d-inline px-3">Why Choose Us</h3>
            <p className="card-text my-2">
              Expertise: Our team comprises experienced professionals with in-depth knowledge and expertise in SEO. We stay updated with the latest industry trends and technologies
              to provide our customers with cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>

      </div>
      
      <>
        {/* Footer */}
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
        {/* Footer */}
      </>
    </div>
  );
};

export default Home;
