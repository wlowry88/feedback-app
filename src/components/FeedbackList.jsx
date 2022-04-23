import React from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

function FeedbackList ({ feedback, handleDelete }) {
  if (!feedback || feedback.length < 1) {
    return <p>Nada</p>
  } else {
    return (
            <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <FeedbackItem
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    />
                </motion.div>
            ))}
            </AnimatePresence>

            </div>
    )
    // return (
    //     <div className='feedback-list'>

    //     {feedback.map( function (item)  {
    //         return (
    //             <FeedbackItem
    //                 key={item.id}
    //                 item={item}
    //                 handleDelete={handleDelete}
    //             />
    //         )
    //     })}

    //     </div>
    // )
  }
}

FeedbackList.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }),
  handleDelete: PropTypes.func
}

export default FeedbackList
