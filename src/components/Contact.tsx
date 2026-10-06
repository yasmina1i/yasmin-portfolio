import {
  useForm,
  ValidationError,
} from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xvkzzkon");

  return (
    <section
      className="section contact-section"
      id="contact"
    >
      <div className="contact-grid">
        <div className="contact-info">
          <p className="section-label">
            CONTACT
          </p>

          <h2>Get in touch</h2>

          <p className="contact-intro">
            I'd love to hear from you. Reach out
            via email or connect on socials.
          </p>

          <div className="contact-details">
            <p>
              <span>Email:</span>{" "}
              <a href="mailto:yasminali@nyu.edu">
                yasminali@nyu.edu
              </a>
            </p>

            <p>
              <span>LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/yasminali"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/yasminali
              </a>
            </p>

            <p>
              <span>Phone:</span>{" "}
              <a href="tel:+17272567462">
                (727)-256-7462
              </a>
            </p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {state.succeeded ? (
            <div className="form-success">
              <p className="section-label">
                MESSAGE SENT
              </p>

              <h3>Thanks for reaching out.</h3>

              <p>
                Your message was sent successfully.
                I'll get back to you as soon as I can.
              </p>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">
                  Full name*
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />

                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email address*
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">
                  Company name
                </label>

                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter a company name"
                />

                <ValidationError
                  prefix="Company"
                  field="company"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject*
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is your message about?"
                  required
                />

                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message*
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={state.submitting}
              >
                {state.submitting
                  ? "Sending..."
                  : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;