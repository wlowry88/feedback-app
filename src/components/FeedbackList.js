import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback}) {
    if (!feedback || feedback.length < 1) {
        return <p>Nada</p>
    } else {
        return (
            <div className='feedback-list'>  

            {feedback.map( function (item, i)  {
                return <FeedbackItem key={item.id} item={item} />
            })}

            </div>)
    }
}

FeedbackList.propTypes = {
    feedback: PropTypes.shape({
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default FeedbackList