import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { StepProvider } from './contexts/StepContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StepProvider>
      <App />
    </StepProvider>
  </BrowserRouter >
);
