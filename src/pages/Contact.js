import React, { useState } from "react";
import ThankYouPopUp from "../components/ThankYouPopUp";

const Contact = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisabled(true);

    setTimeout(() => {
      console.log(values);
      setValues({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      setSuccess(true);
      setDisabled(false);
    }, 4000);
  };

  return (
    <div className="contact-body">
      {success && (
        <ThankYouPopUp
          onClick={() => {
            setSuccess(false);
          }}
        />
      )}

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form_headings">
            <h2>Get in Touch</h2>
            <p>Let us know what you have in mind</p>
          </div>

          <div className="contact-form_fields">
            <div className="contact-form_groups">
              <div className="contact-form_group">
                <label className="contact-form_label">first name</label>
                <input
                  value={values.firstname}
                  className="contact-form_input"
                  required
                  type="text"
                  placeholder="Please enter first name"
                  onChange={handleChange("firstname")}
                />
              </div>
              <div className="contact-form_group">
                <label className="contact-form_label">last name</label>
                <input
                  value={values.lastname}
                  className="contact-form_input"
                  required
                  type="text"
                  placeholder="Please enter last name"
                  onChange={handleChange("lastname")}
                />
              </div>
            </div>
            <div className="contact-form_groups">
              <div className="contact-form_group">
                <label className="contact-form_label">email</label>
                <input
                  value={values.email}
                  className="contact-form_input"
                  required
                  type="email"
                  placeholder="Please enter email"
                  onChange={handleChange("email")}
                />
              </div>
              <div className="contact-form_group">
                <label className="contact-form_label">phone number</label>
                <input
                  value={values.phoneNumber}
                  className="contact-form_input"
                  required
                  type="tel"
                  placeholder="Please enter phone number"
                  onChange={handleChange("phoneNumber")}
                />
              </div>
            </div>
            <div className="contact-form_group">
              <label className="contact-form_label">
                what do you have in mind?
              </label>
              <textarea
                value={values.message}
                className="contact-form_textarea"
                required
                placeholder="Start typing..."
                rows={4}
                onChange={handleChange("message")}
              ></textarea>
            </div>
          </div>

          <button
            disabled={disabled}
            className={`contact-form_btn ${disabled && "disabled-btn"}`}
          >
            {disabled ? "submitting" : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
