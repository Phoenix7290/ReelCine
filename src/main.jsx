import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Router from './routes';

import './config/i18n.js'

import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
