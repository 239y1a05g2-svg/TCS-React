import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import App from './App.tsx'
//import Demo2 from './Demo2.tsx'
// import App from './App.tsx'
// import Demo1 from './Demo1.tsx' <App /><Demo2/>
//     <Demo1/>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
