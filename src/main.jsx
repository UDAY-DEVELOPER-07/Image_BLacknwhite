import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Dragdrop from './components/dragdrop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Dragdrop />
  </StrictMode>,
)
