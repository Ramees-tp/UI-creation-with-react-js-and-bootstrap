import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import './components/Header.css'
import Content from './components/Content'
import './components/Content.css'
import Amazon from './components/Amazon'
import './components/Amazon.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Amazon/>
    <Header/>
    <Content/>
  </React.StrictMode>,
)
