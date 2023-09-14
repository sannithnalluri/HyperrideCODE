import React, { useState } from 'react';
import './Faq.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FaqPage = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
 
 

  const toggleQuestion = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  const faqData = [
    {
      question: "How does HyperRide's bike rental service work?",
      answer: "HyperRide's bike rental service allows you to rent a bike for a specified duration. You can choose a bike from our inventory, book it online or in person, and enjoy your ride. We offer flexible rental periods to suit your needs.",
    },
    {
      question: 'What types of bikes does HyperRide offer for rent?',
      answer: "HyperRide offers a variety of bikes for rent, including mountain bikes, road bikes, city bikes, and electric bikes (e-bikes). Whether you need a bike for off-road adventures or urban commuting, we have options to fit your preferences.",
    },
    {
      question: 'What is the rental pricing and duration at HyperRide?',
      answer: "HyperRide's rental pricing depends on the type of bike and the duration of the rental. We offer hourly, daily, and weekly rental options, and our pricing is competitive. You can check our website or visit our rental location for specific pricing details.",
    },
    {
      question: 'Does HyperRide provide safety equipment with bike rentals?',
      answer: 'Yes, safety is important to us at HyperRide. We provide safety equipment such as helmets, reflective gear, and bike locks with every rental. Your safety is our priority, and we encourage all riders to use the provided safety gear.',
    },
    {
      question: 'What is HyperRide\'s cancellation policy?',
      answer: "HyperRide has a flexible cancellation policy. If you need to cancel your reservation, please notify us in advance. We'll provide you with details on our cancellation policy when you make a reservation.",
    },
  ];
  

  return (
    <div className='faq-container'>
      <h1>Frequently Asked Questions</h1>
      <div className='faq-list'>
        {faqData.map((faq, index) => (
          <div className='faq-item' key={index}>
            <div className='faq-question' onClick={() => toggleQuestion(index)}>
              <span>{faq.question}</span>
              {expandedQuestion === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            {expandedQuestion === index && <div className='faq-answer'>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqPage;
