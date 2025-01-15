import React, {useState, useEffect} from 'react';
import {Typography, Box} from '@mui/material';
import Question from '../../components/Question/Question';
import SearchBar from '../../components/SearchBar/SearchBar';

interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

const reactQuestions: QuestionItem[] = [
  {
    id: 'jsx',
    question: 'What is JSX?',
    answer:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It's used with React to describe what the UI should look like.",
  },
  {
    id: 'state-and-props',
    question: 'Explain the difference between state and props in React.',
    answer:
      'Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. State, on the other hand, is used to manage data within a component. It can be modified using the setState() method and causes the component to re-render when changed.',
  },
  {
    id: 'hooks',
    question: 'What are React hooks?',
    answer:
      'React hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 to enable developers to use state and lifecycle methods without writing a class component. Some commonly used hooks include useState, useEffect, useContext, and useRef.',
  },
  {
    id: 'components',
    question: 'What are components in React?',
    answer:
      'Components are the building blocks of React applications. They are reusable pieces of code that return React elements describing what should appear on the screen. Components can be either function components or class components.',
  },
  {
    id: 'virtual-dom',
    question: 'What is the Virtual DOM in React?',
    answer:
      'The Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to improve performance by minimizing direct manipulation of the DOM. When state changes, React first updates the Virtual DOM, compares it with the previous version, and then efficiently updates only the necessary parts of the actual DOM.',
  },
];

function ReactPage() {
  const [filteredQuestions, setFilteredQuestions] = useState<QuestionItem[]>(reactQuestions);

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
    const filtered = reactQuestions.filter(q => q.question.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredQuestions(filtered);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        React Interview Questions
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

export default ReactPage;
