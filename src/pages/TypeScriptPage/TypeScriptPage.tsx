import React, {useState, useEffect} from 'react';
import {Typography, Box} from '@mui/material';

import Question from 'components/Question';
import SearchBar from 'components/SearchBar';
import PageHeader from 'components/PageHeader';
import {typescriptQuestions} from 'shared/questions/ts_questions';
import {TQuestionItem} from 'shared/types/common';

function TypeScriptPage() {
  const [filteredQuestions, setFilteredQuestions] = useState<TQuestionItem[]>(typescriptQuestions);

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
    const filtered = typescriptQuestions.filter(q => q.question.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredQuestions(filtered);
  };

  return (
    <Box>
      <PageHeader title="TypeScript Interview Questions" />
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

export default TypeScriptPage;
