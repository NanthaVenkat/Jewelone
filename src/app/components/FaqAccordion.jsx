import React from 'react'

const FaqAccordion = ({faqs}) => {
  return (
    <div className="col-12">
      <div className="accordion accordion-flush" id="ContactPageFaqs2">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-header">
              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${index}`}
              >
                {faq.question}
              </button>
            </div>
            <div
              id={`flush-collapse${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#ContactPageFaqs2"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqAccordion