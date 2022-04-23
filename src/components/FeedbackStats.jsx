import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats(feedback) {
    feedback = feedback.feedback;
  let average = feedback.reduce((acc, cur) => {
      return acc + cur.rating;
  }, 0) / feedback.length;  
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.shape({
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default FeedbackStats;
