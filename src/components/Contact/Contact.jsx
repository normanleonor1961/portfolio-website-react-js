import React from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="container contact-section">
      <div className="section-title py-5">
        <h5>Contact</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="contact-form-image">
            <img
              src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w-1260&h=750&dpr2"
              alt="contact form image"
            />
          </div>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Me</h5>
            </div>
            <form action="">
              <div className="contact-form">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" />
              </div>

              <div className="contact-form">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" />
              </div>

              <div className="contact-form">
                <label htmlFor="" className="form-label">
                  Job Types
                </label>
                <select className="custom-select-tag">
                  <option value="">What do you offer?</option>
                  <option value="">Full-time</option>
                  <option value="">Rate per hour job</option>
                  <option value="">Part-time</option>
                  <option value="">Contract</option>
                </select>
              </div>

              <div className="contact-form">
                <label htmlFor="" className="form-label">
                  Message
                </label>
                <textarea rows="6" type="text" className="form-control" />
              </div>

              <div className="button-submit py-1">
                <p>
                  Send <RiSendPlaneFill size={20} />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
