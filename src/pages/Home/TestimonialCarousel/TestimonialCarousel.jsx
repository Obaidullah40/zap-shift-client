import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  { name: 'Awlad Hossin', role: 'Senior Product Designer', message: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.' },
  { name: 'Rasel Ahamed', role: 'CTO', message: 'Using a posture corrector has significantly reduced my back pain. It’s a must-have for anyone working long hours at a desk.' },
  { name: 'Nasir Uddin', role: 'CEO', message: 'I never realized how poor my posture was until I tried this product. Now I feel more confident and pain-free.' },
  { name: 'Mim Akter', role: 'UX Designer', message: 'I love how comfortable and easy to use this posture corrector is. My neck strain has improved a lot.' },
  { name: 'Sabbir Hossain', role: 'Software Engineer', message: 'Working from home had wrecked my posture, but this product helped me realign and stay comfortable.' },
  { name: 'Fatema Khatun', role: 'Marketing Specialist', message: 'Stylish and functional! I wear it daily, and I’ve noticed a big change in how I sit and stand.' },
  { name: 'Tariq Islam', role: 'Project Manager', message: 'It fits perfectly under my clothes and gives me that gentle nudge to sit upright throughout the day.' },
  { name: 'Lamia Binte Noor', role: 'Content Writer', message: 'I was skeptical at first, but now I can’t imagine working without it. Highly recommended!' },
  { name: 'Mahmudul Hasan', role: 'Data Analyst', message: 'This product has helped me become more conscious of my posture in meetings and during long work sessions.' },
  { name: 'Rebeka Sultana', role: 'Fitness Coach', message: 'As a fitness professional, I always recommend posture correctors, and this one is top-tier.' }
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => next(), 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="py-16 bg-base-200 text-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-4">What our customers are sayings</h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-10">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      <div className="flex justify-center items-center gap-4">
        {/* Left arrow */}
        <button onClick={prev} className="btn btn-circle btn-outline">
          <FaArrowLeft />
        </button>

        {/* Main Carousel with side previews */}
        <div className="relative w-full max-w-5xl flex items-center justify-center">
          <div className="flex items-center justify-center w-full relative space-x-[-3rem]">
            {/* Left preview card */}
            <motion.div
              key={prevIndex}
              className="w-72 hidden md:block opacity-40 scale-95 z-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card {...testimonials[prevIndex]} />
            </motion.div>

            {/* Active card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="w-80 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card {...testimonials[index]} />
              </motion.div>
            </AnimatePresence>

            {/* Right preview card */}
            <motion.div
              key={nextIndex}
              className="w-72 hidden md:block opacity-40 scale-95 z-0"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card {...testimonials[nextIndex]} />
            </motion.div>
          </div>
        </div>

        {/* Right arrow */}
        <button onClick={next} className="btn btn-circle btn-outline">
          <FaArrowRight />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="mt-6 flex justify-center space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-primary' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ name, role, message }) => (
  <div className="card bg-base-100 shadow-xl p-6 h-full">
    <p className="text-gray-700">❝ {message} ❞</p>
    <div className="border-t pt-4 mt-4">
      <h4 className="font-bold">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

export default TestimonialCarousel;
