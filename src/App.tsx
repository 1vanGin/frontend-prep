import {lazy} from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import {URL_PATH} from './pages/enum';

const HomeModule = lazy(() => import('./pages/Home'));
const JavaScriptModule = lazy(() => import('./pages/JavaScriptPage'));
const ReactModule = lazy(() => import('./pages/ReactPage'));
const TypeScriptModule = lazy(() => import('./pages/TypeScriptPage'));
const InterviewQuestionsModule = lazy(() => import('./pages/InterviewQuestions'));
const CodingTasksModule = lazy(() => import('./pages/CodingTasks'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeModule />} />
        <Route path={URL_PATH.JavaScript} element={<JavaScriptModule />} />
        <Route path={URL_PATH.React} element={<ReactModule />} />
        <Route path={URL_PATH.TypeScript} element={<TypeScriptModule />} />
        <Route path={URL_PATH.Interview_Questions} element={<InterviewQuestionsModule />} />
        <Route path={URL_PATH.Coding_Tasks} element={<CodingTasksModule />} />
      </Routes>
    </Layout>
  );
}

export default App;
