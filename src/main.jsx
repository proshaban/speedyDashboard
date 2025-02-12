import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
const App = require('./App.jsx').default;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
