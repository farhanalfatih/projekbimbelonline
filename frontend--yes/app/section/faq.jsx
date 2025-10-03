'use client';
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apa itu E-Learning?",
      answer:
        "E-Learning adalah metode pembelajaran digital yang memungkinkan kamu belajar secara online, fleksibel, dan bisa diakses kapan saja.",
    },
    {
      question: "Apakah saya bisa mengakses materi kapan saja?",
      answer:
        "Ya, semua materi dapat diakses 24/7 sehingga kamu bisa belajar sesuai waktu luangmu.",
    },
    {
      question: "Apakah ada tutor yang membantu?",
      answer:
        "Tentu, ada tutor profesional yang siap membimbing dan menjawab pertanyaanmu.",
    },
    {
      question: "Apakah ada komunitas belajar?",
      answer:
        "Ya, tersedia komunitas aktif untuk diskusi, sharing, dan kolaborasi dengan peserta lain.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm bg-white overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-50"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-600 text-sm border-t bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
