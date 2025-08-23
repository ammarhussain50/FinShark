import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SearchCompanies } from './api.tsx';

(async () => {
  try {
    const res = await SearchCompanies("tsla");
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
