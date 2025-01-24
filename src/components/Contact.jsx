import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:lakshmipravallikabhupathi@gmail.com"
            className="text-blue-600 hover:underline"
          >
            lakshmipravallikabhupathi@gmail.com
          </a>
        </p>
        <p className="mb-4">
          <strong>Phone:</strong>{" "}
          <a href="tel:+16605281694" className="text-blue-600 hover:underline">
            +1 (660) 528-1694
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
