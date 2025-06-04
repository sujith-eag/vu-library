# Question 1

Design and develop a functional component named `FeedbackPoll`. 
* Display a question such as “How would you rate our tech support?” with three buttons: Good, Neutral, Poor. 
* When a user clicks one, use conditional rendering to show a thank-you message including their selected choice. 
* Use external CSS to style the poll area, buttons, and feedback message.

## `FeedbackPoll.jsx`

```jsx
import React, { useState } from 'react';
import './FeedbackPoll.css';

function FeedbackPoll() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Event handler for button clicks
	function handleFeedback(choice) {
      setFeedback(choice);
      setSubmitted(true);
	}

  // Render thank-you message
	  if (submitted) {
	    return (
	      <div className="thank-you-message">
	        Thank you for your feedback: 
	        <strong>{feedback}</strong>
	      </div>
	  );
	}

  // Render poll options
  return (
    <div className="feedback-poll">
      <h2>How would you rate our tech support?</h2>
      <div className="feedback-buttons">
        <button onClick={() => handleFeedback('Good')}>Good</button>
        <button onClick={() => handleFeedback('Neutral')}>Neutral</button>
        <button onClick={() => handleFeedback('Poor')}>Poor</button>
      </div>
    </div>
  );
}

export default FeedbackPoll;
```

## `FeedbackPoll.css`

```css
.feedback-poll {
  border: 2px solid #ccc;
  padding: 20px;
  max-width: 400px;
  margin: 40px auto;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

.feedback-poll h2 {
  margin-bottom: 20px;
  color: #333;
}

.feedback-buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.feedback-buttons button:hover {
  background-color: #0056b3;
}

.thank-you-message {
  text-align: center;
  font-size: 18px;
  margin-top: 40px;
  color: #28a745;
  font-weight: bold;
}
```

