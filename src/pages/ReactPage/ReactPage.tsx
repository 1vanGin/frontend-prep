import React, {useState, useEffect} from 'react';
import {Typography, Box} from '@mui/material';
import Question from '../../components/Question/Question';
import SearchBar from '../../components/SearchBar/SearchBar';
import {TQuestionItem} from '../../shared/types/common';
import {reactQuestions} from '../../shared/questions/react_questions';

function ReactPage() {
  const [filteredQuestions, setFilteredQuestions] = useState<TQuestionItem[]>(reactQuestions);

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
