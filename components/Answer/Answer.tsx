import React, { useEffect, useState } from "react";
import styles from "./answer.module.css";

interface AnswerProps {
  text: string;
}

export const Answer: React.FC<AnswerProps> = ({ text }) => {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    setWords(text.split(" "));
  }, [text]);

  return (
    <div className="bg-gray-100 text-base p-6">
      {words.map((word, index) => (
        <span
          key={index}
          className={styles.fadeIn}
          style={{ animationDelay: `${index * 0.001}s` }}
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );
};
