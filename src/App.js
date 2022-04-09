import {useState} from 'react'
import FeedbackData from './data/FeedbackData';
import Header from "./components/Header";
import FeedbackList from './components/FeedbackList';

function App(props) {
    const [feedback, setFeedback] = useState(FeedbackData);
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback}/>
            </div>
        </>
    )
}



export default App;