import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage () {
  return (
    <Card>
      <div className="about">
        <h1>This is a feedback app</h1>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>
      </div>
    </Card>
  )
}

export default AboutPage
