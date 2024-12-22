import React, { useState } from "react";

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Q1. How does the free trial work?",
            answer: "We offer a 14-day free trial with full access to all features. You can cancel anytime before the trial ends to avoid any charges.",
        },
        {
            question: "Q2. What payment methods do you accept?",
            answer: "We accept major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment gateway.",
        },
        {
            question: "Q3. Can I cancel or change my subscription at any time?",
            answer: "Yes, you can cancel or change your subscription at any time through your account settings. Changes will take effect at the start of the next billing cycle.",
        },
        {
            question: "Q4. Are there any additional costs or fees?",
            answer: "There are no hidden fees. All costs are clearly outlined in the pricing section. Any additional charges for optional add-ons will be specified during the checkout process.",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 my-10 sm:my-20">
            <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
            <p className="text-center my-5 font-thin">
                With lots of unique blocks, you can easily build a page without coding.
                <br />
                Build your next landing page.
            </p>
            <div className="space-y-4 pt-5">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                        data-aos="fade-in"
                    >
                        <div className="flex justify-between mx-5">
                            <h3 className="text-xl font-semibold">{faq.question}</h3>
                            <span className="text-gray-500 text-2xl">
                                {openIndex === index ? "-" : "+"}
                            </span>
                        </div>
                        {openIndex === index && (
                            <p className="mt-2 mx-5 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
