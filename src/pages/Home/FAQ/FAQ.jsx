import React from 'react';

const faqData = [
    {
        question: "What is Posture Pro and how does it work?",
        answer:
            "Posture Pro is a smart posture corrector that gently supports your back and shoulders to encourage better posture. It uses ergonomic design to improve spinal alignment throughout the day.",
    },
    {
        question: "Can I wear Posture Pro under my clothes?",
        answer:
            "Yes, Posture Pro is designed to be slim and discreet, so you can comfortably wear it under your clothes without anyone noticing.",
    },
    {
        question: "How long should I wear it each day?",
        answer:
            "It is recommended to start with 15–30 minutes per day and gradually increase as your body adjusts. Most users find 1–2 hours daily beneficial for long-term improvement.",
    },
    {
        question: "Is Posture Pro suitable for both men and women?",
        answer:
            "Absolutely! Posture Pro is fully adjustable and fits all body types. It’s unisex and available in multiple sizes for a comfortable fit.",
    },
    {
        question: "Can Posture Pro help with back pain?",
        answer:
            "Yes, by promoting proper posture, Posture Pro helps reduce tension in the back, neck, and shoulders, which often alleviates pain caused by poor alignment.",
    },
];


const FAQ = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h2 className="text-3xl text-black font-bold mb-4">Frequently Asked Question (FAQ)</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            <div className="space-y-4">
                {faqData.map((item, idx) => (
                    <div key={idx} className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">{item.question}</div>
                        <div className="collapse-content text-sm">{item.answer}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FAQ;