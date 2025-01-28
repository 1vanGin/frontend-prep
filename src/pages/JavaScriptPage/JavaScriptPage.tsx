import React, {useEffect, useState} from 'react';
import {Box} from '@mui/material';

import Question from 'components/Question';
import SearchBar from 'components/SearchBar';
import PageHeader from 'components/PageHeader';
import {NothingFound} from 'components/NothingFound';
import {TQuestionItem} from 'shared/types/common';
import {javascriptQuestions} from 'shared/questions/js_questions';

function JavaScriptPage() {
  const [filteredQuestions, setFilteredQuestions] = useState<TQuestionItem[]>(javascriptQuestions);

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
      <PageHeader title="Вопросы по JavaScript" />
      <SearchBar onSearch={handleSearch} />
      {filteredQuestions.map(q => (
        <Box key={q.id} id={q.id} mb={2}>
          <Question question={q.question} answer={q.answer} />
        </Box>
      ))}
      {filteredQuestions.length === 0 && <NothingFound />}
    </Box>
  );
}

export default JavaScriptPage;
