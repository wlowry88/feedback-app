import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList () {
  const {feedback} = useContext(FeedbackContext)

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
                />
            </motion.div>
        ))}
        </AnimatePresence>

      </div>
    )
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
