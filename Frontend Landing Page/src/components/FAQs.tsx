'use client';
import React from 'react';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    question: "Why was this app created, and what problem does it aim to solve?",
    answer:
      "The three of us wanted our docs to be analysed and moving around a multitide of websites to look for solutions was getting boring. Thus FACt was born.",
  },
  {
    question: "Who is the primary target audience for this app?",
    answer:
    "Conceived to be a general purpose system FACt is for all to use.",
  },
  {
    question: "How does this app distinguish itself from its biggest competitor?",
    answer:
      "We streamlined the process of doc analysis by bring together three commonly found extensions: .docx, .pptx, .pdf in a single platform. It leverages OCR capabilities too. FACt sees all.",
  },
  {
    question: "What further improvements and features are planned for the app in the future?",
    answer:
      "Fine-tuning.",
  },
  {
    question: "Who is the bearded guy in the logo?",
    answer:
    "Oh, that's JAS. The patron saint of documents."
  }
];

const AccordionItem = ({question, answer}: {question: string, answer: string}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return(
    <div className='py-7 border-b border-white/30' onClick={() => setIsOpen(!isOpen) }>
              <div className='flex item-center'>
                <span className='flex-1 text-lg font-bold'>{question}</span>
                {isOpen ? <MinusIcon /> : <PlusIcon /> }
                </div>
              <AnimatePresence>
              {isOpen && (
                <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0
                }}
                animate={{
                  opacity: 1,
                  height: 'auto',
                  marginTop: '16px'
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0
}}
                >
                  {answer}
              </motion.div>
              )}
              </AnimatePresence>
              
  </div>
  )
}

export const FAQs = () => {
  return(
    <div className="bg-black text-white bg-gradient-to-b from-[#0D2C54] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center text-5xl sm:text-6xl sm:max-w-[628px] mx-auto font-bold tracking-tighter'>Frequently Asked Questions</h2>
        <div className='mt-12 max-w-[648px] mx-auto'>
          {items.map(({question, answer}) => (
            <AccordionItem question={question} answer={answer} key={question}/>
          ))}
        </div>
      </div>
    </div>
  );
};
