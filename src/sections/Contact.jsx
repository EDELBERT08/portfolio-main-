import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setSubmitted(true);
      // Reset submission state after 5 seconds to allow sending another
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full max-w-7xl mx-auto md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10 relative overflow-hidden transition-all duration-500">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-5 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl">
                    ✅
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out, {form.name || "Friend"}!<br />
                    I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-medium transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-7"
                >
                  <div>
                    <label htmlFor="name">Your name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What’s your good name?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What’s your email address?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows="5"
                      required
                    />
                  </div>

                  <button type="submit">
                    <div className="cta-button group">
                      <div className="bg-circle" />
                      <p className="text">
                        {loading ? "Sending..." : "Send Message"}
                      </p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            {/* 3D Model Removed for cleaner UI */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
