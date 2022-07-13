import {useContext, React} from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem ({ item }) {
  const {deleteFeedback } = useContext(FeedbackContext)
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color='purple'></FaTimes>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
