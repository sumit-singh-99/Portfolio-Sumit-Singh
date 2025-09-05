import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_q7lmydm", // replace with your actual Service ID
        "template_7zvg3j8", // replace with your actual Template ID
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        "-3CkPo2mDrwt1nTeE" // replace with your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("❌ Something went wrong. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">📩 Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-indigo-600 text-xl" />
              <p className="text-gray-700 dark:text-gray-300">
                sumitsin712@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-indigo-600 text-xl" />
              <p className="text-gray-700 dark:text-gray-300">+91 8439684589</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-indigo-600 text-xl" />
              <p className="text-gray-700 dark:text-gray-300">
                Rudrapur, Uttarakhand, India
              </p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg w-full transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
