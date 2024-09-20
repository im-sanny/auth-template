import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
import SignIn from './SignIn'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < SignIn/>
  </StrictMode>,
)
