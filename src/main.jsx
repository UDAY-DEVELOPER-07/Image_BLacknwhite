import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './font.css'
import Welcome from './components/welcome.jsx'
import Dragdrop from './components/dragdrop.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Welcome />
  </StrictMode>,
)
