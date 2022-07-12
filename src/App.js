import { React, useState } from 'react'
import FeedbackData from './data/FeedbackData'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import Post from './components/Post'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'

function App (props) {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = Date.now()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
    console.log('App', id)
  }
  return (
    <Router>
      <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback}
                handleDelete={deleteFeedback}/>
              </>
            }>
            </Route>
            <Route path='/about' element={ <AboutPage /> } />
            <Route path='/post/:id/:name' element={ <Post /> } />
          </Routes>
          <AboutIconLink />
        </div>
        </Router>
  )
}

export default App
