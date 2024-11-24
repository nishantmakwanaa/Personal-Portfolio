import { useState } from "react";
import { init, send } from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useState(() => {
    init("09pQjJGPRL1Lqrz_C");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    try {
      const response = await send(
        "nishantmakwanaa",
        "template_qfvbqle",
        templateParams
      );

      if (response.status === 200) {
        alert("Message Sent Successfully !");
      } else {
        alert("Something Went Wrong. Please Try Again...");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div>
        <div className="bd-grid">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="contact__input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your E-Mail"
                className="contact__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="contact__input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                className="contact__input"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
