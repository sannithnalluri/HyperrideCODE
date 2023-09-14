import React,{useState} from 'react';
import './Faq.css';
import {AiOutlinePlus} from 'react-icons/ai'

const Faq = () => {
    const faqData = [
        {
          question: 'What is React?',
          answer: 'React is a JavaScript library for building user interfaces.'
        },
        {
          question: 'How do I install React?',
          answer: 'You can install React using npm or yarn. Run "npm install react" or "yarn add react" to get started.'
        },
        {
          question: 'What is React?',
          answer: 'React is a JavaScript library for building user interfaces.'
        },
        {
          question: 'How do I install React?',
          answer: 'You can install React using npm or yarn. Run "npm install react" or "yarn add react" to get started.'
        },
        // Add more FAQ items as needed
      ];
      const [activeIndex, setActiveIndex] = useState(null);

      const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    
      return (
        <div>
 <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            {faqData.map((faq, index) => (
              <li key={index}>
                <strong onClick={() => toggleAnswer(index)}>{faq.question} <AiOutlinePlus/></strong>
                <hr/>
                {activeIndex === index && <p>{faq.answer}</p>}
              </li>
            ))}
          </ul>
        </div>
        </div>
       
      );
}

export default Faq;
