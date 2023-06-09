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
      
    </div>
  );
};

export default Home;
