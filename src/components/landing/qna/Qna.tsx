import { motion } from "framer-motion"

import { useState } from "react";
import parse from 'html-react-parser';

interface qnaData{
    question: string,
    answer: string
}

export default function Qna({ question, answer }: qnaData) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale:0.2 }}
      whileInView={{ opacity: 1, scale:1 }}
      transition={{ 
          duration: 0.5
      }}
    className="mb-4 border border-black">
      <div
        className="border border-black bg-white flex justify-between items-center hover:cursor-pointer px-4 py-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className="font-gooMed text-detail">{question}</p>
        <span className="font-gooBold text-xl leading-none select-none ml-4">
          {isExpanded ? "-" : "+"}
        </span>
      </div>
      {isExpanded ? (
        <div
          className={
            "border border-black bg-white flex justify-between items-center px-4 py-2 text-detail"
          }
        >
          <p className="font-gooReg">{parse(answer)}</p>
        </div>
      ) : null}
    </motion.div>
  );
}
