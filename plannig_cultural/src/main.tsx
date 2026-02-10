// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Используем правильный id
const container = document.getElementById('app')
if (!container) throw new Error("Root container not found")

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
)
