"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface FAQSProps {
  question: string;
  answer: string;

}
const FaqItem = ({ question, answer }: FAQSProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        onClick={toggleOpen}
        className="flex justify-between w-full px-4 py-2 bg-gray-100 rounded-md"
      >
        <span className='font-secondFont'>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-4 py-2 bg-white ">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQS() {
  const faqData = [
    {
      question: 'Ücretler bir kereye mahsus mu?',
      answer: 'Evet bir paketi satın aldığınızda bütün dosyalarıyla birlikte sizin olur',
    },
    {
      question: 'Üst pakete geçişler nasıl oluyor?',
      answer: 'Aynı tasarım üzerinden teknolojik gelişmeler yapılıyor ve satın alınan yeni paket %30 indirimli bir şekilde sizin hizmetinize sunuluyor.',
    },
    // Diğer soru ve cevapları buraya ekleyin
  ];

  return (
    <div className="flex justify-center h-72  p-5  rounded-md">
      <div className="w-1/2">
        {/* SVG Bölümü */}
        <div className="h-full flex items-center justify-center">
          {/* SVG kodunuzu buraya yerleştirin */}
          <img src="/faqs.svg" alt="" className='w-full h-full' />
        </div>
      </div>
      <div className="w-1/2">
        {/* Sıkça Sorulan Sorular Bölümü */}
        <div className="w-full mx-auto">
          <h1 className='text-lg text-sky-500 p-3 font-secondFont'>Sıkça Sorulan Sorular </h1>
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}