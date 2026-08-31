import { useState } from 'react';
import { faqData } from '../data';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <div className="faq__inner">
        <h2 className="faq__title">PERGUNTAS FREQUENTES</h2>
        <div className="faq__list">
          {faqData.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div className="faq__item" key={f.question}>
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.question}</span>
                  <span className="faq__icon">{isOpen ? '–' : '+'}</span>
                </button>
                {isOpen && <p className="faq__answer">{f.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
