import React from 'react'
import './index.css'

const NotFound = () => {
  return (
    <div>
      <div class='error-case'>
        <div class='error-info'>
          <h1>Oops!</h1>
          <h2>404 - That page was not found</h2>
        </div>
        <a href='/'>Go Back</a>
      </div>

    </div>

  )
}

export default NotFound