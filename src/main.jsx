import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Textarea from './components/TextInput'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
