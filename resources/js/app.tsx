import '../css/app.css'
import './bootstrap'
import Router from './router'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <Router />,
)
