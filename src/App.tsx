import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import JavaScriptPage from './pages/JavaScriptPage/JavaScriptPage';
import ReactPage from './pages/ReactPage/ReactPage';
import TypeScriptPage from './pages/TypeScriptPage/TypeScriptPage';
import InterviewQuestions from './pages/InterviewQuestions/InterviewQuestions';
import CodingTasks from './pages/CodingTasks/CodingTasks';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/javascript" element={<JavaScriptPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/typescript" element={<TypeScriptPage />} />
        <Route path="/interview-questions" element={<InterviewQuestions />} />
        <Route path="/coding-tasks" element={<CodingTasks />} />
      </Routes>
    </Layout>
  );
}

export default App;
