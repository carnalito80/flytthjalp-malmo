import React from 'react'
import './Footer.css'

export default () => (
  <div>
   
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} {' '}
          <a href="/">Flytthjälp Malmö</a>
        </span>
      </div>
    </footer>
  </div>
)
