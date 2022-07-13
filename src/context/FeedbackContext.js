import { createContext, useState } from 'react'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This item is from context 2',
      rating: 8
    },
    {
      id: 3,
      text: 'This item is from context',
      rating: 4
    }
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

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

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext
