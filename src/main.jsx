import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Router from './routes';

import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
