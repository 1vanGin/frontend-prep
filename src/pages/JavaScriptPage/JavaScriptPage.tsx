import React, {useState, useEffect} from 'react';
import {Typography, Box} from '@mui/material';
import Question from '../../components/Question/Question';
import SearchBar from '../../components/SearchBar/SearchBar';

interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

const javascriptQuestions: QuestionItem[] = [
  {
    id: 'closures',
    question: 'What is closure in JavaScript?',
    answer:
      "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.",
  },
  {
    id: 'equality-operators',
    question: "Explain the difference between '==' and '===' in JavaScript.",
    answer:
      "The '==' operator performs type coercion before comparison, while '===' compares both value and type without coercion. For example, 1 == '1' is true, but 1 === '1' is false.",
  },
  {
    id: 'event-loop',
    question: 'What is the event loop in JavaScript?',
    answer:
      'The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks the call stack and processes tasks from the callback queue when the stack is empty.',
  },
  {
    id: 'prototypal-inheritance',
    question: 'What is prototypal inheritance in JavaScript?',
    answer:
      'Prototypal inheritance is a feature in JavaScript where an object can inherit properties and methods from another object. It uses the prototype chain to look up properties and methods.',
  },
  {
    id: 'es6-features',
    question: 'What are some key features introduced in ES6?',
    answer:
      'ES6 (ECMAScript 2015) introduced several new features including let and const keywords, arrow functions, template literals, destructuring assignment, spread operator, rest parameters, classes, and modules.',
  },
];

function JavaScriptPage() {
  const [filteredQuestions, setFilteredQuestions] = useState<QuestionItem[]>(javascriptQuestions);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filtered = javascriptQuestions.filter(q => q.question.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredQuestions(filtered);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        JavaScript Interview Questions
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {filteredQuestions.map(q => (
        <Box key={q.id} id={q.id} mb={2}>
          <Question question={q.question} answer={q.answer} />
        </Box>
      ))}
      {filteredQuestions.length === 0 && (
        <Typography color="text.secondary">No questions found matching your search.</Typography>
      )}
    </Box>
  );
}

export default JavaScriptPage;
