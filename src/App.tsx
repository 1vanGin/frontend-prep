import {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';
import {URL_PATH} from 'pages/enum';

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
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomeModule />
            </Suspense>
          }
        />
        <Route
          path={URL_PATH.JavaScript}
          element={
            <Suspense fallback={<Loader />}>
              <JavaScriptModule />
            </Suspense>
          }
        />
        <Route
          path={URL_PATH.React}
          element={
            <Suspense fallback={<Loader />}>
              <ReactModule />
            </Suspense>
          }
        />
        <Route
          path={URL_PATH.TypeScript}
          element={
            <Suspense fallback={<Loader />}>
              <TypeScriptModule />
            </Suspense>
          }
        />
        <Route
          path={URL_PATH.Interview_Questions}
          element={
            <Suspense fallback={<Loader />}>
              <InterviewQuestionsModule />
            </Suspense>
          }
        />
        <Route
          path={URL_PATH.Coding_Tasks}
          element={
            <Suspense fallback={<Loader />}>
              <CodingTasksModule />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
