import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import Button from './Button'

function FeedbackForm(props) {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button 
                        type="submit"
                        version="">
                        Send
                    </Button>
                </div>
            </form>
        </Card>     
    )
}

FeedbackForm.propTypes = {}

export default FeedbackForm
