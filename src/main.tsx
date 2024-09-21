import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import SignUp from './SignUp'
import SignIn from './SignIn'
// import App from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < SignIn />
    {/* < SignUp/> */}
  </StrictMode>,
)
