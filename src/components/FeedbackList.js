import React from 'react'
import FeedbackItem from './FeedbackItem'

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

export default FeedbackList