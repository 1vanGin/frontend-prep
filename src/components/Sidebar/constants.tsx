import {
  Assignment as TaskIcon,
  Code as CodeIcon,
  Javascript as JavaScriptIcon,
  Language as TypeScriptIcon,
  QuestionAnswer as InterviewIcon,
} from '@mui/icons-material';

import {URL_PATH} from 'pages/enum';
import {TMenuItem} from './types';

export const menuItems: TMenuItem[] = [
  {text: 'JavaScript', icon: <JavaScriptIcon />, path: URL_PATH.JavaScript},
  {text: 'React', icon: <CodeIcon />, path: URL_PATH.React},
  {text: 'TypeScript', icon: <TypeScriptIcon />, path: URL_PATH.TypeScript},
  {
    text: 'Interview Questions',
    icon: <InterviewIcon />,
    path: URL_PATH.Interview_Questions,
  },
  {text: 'Coding Tasks', icon: <TaskIcon />, path: URL_PATH.Coding_Tasks},
];
