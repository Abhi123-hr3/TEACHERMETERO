
import { useState } from 'react';
import './App.css';

const teachersList = [
  "Mr. Sharma",
  "Mrs. Gupta",
  "Mr. Verma",
  "Ms. Singh",
  "Dr. Patel",
];

export default function App() {
  const [ratings, setRatings] = useState({});
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (teacher, value) => {
    setRatings({ ...ratings, [teacher]: value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Review Submitted", {
      anonymous,
      ratings,
    });
  };

  if (submitted) {
    return (
      <div className="container">
        <h2>Thank you for your review!</h2>
        <p>Your feedback has been recorded.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Rate Your Teachers</h1>
      {teachersList.map((teacher) => (
        <div className="card" key={teacher}>
          <span>{teacher}</span>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  (ratings[teacher] || 0) >= star ? 'star selected' : 'star'
                }
                onClick={() => handleRating(teacher, star)}
              >★</span>
            ))}
          </div>
        </div>
      ))}
      <div className="anonymous">
        <input
          type="checkbox"
          id="anonymous"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
        />
        <label htmlFor="anonymous">Submit as Anonymous</label>
      </div>
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
}
