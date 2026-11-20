import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used at build time to save the full page as HTML, so search engines and
// AI crawlers that don't run JavaScript can read every section.
export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
