import  { createRoot } from 'react-dom/client';
import App from './app';

const timer = createRoot(document.querySelector('.root'))
timer.render(<App />)