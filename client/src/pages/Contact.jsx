import React from 'react';

const Contact = () => {
  return (
    <section id="contact-section" className="bg-gradient-to-b from-blue-600 to-transparent text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-8">Contact our travel specialists to plan your perfect trip</p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
