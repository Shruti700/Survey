import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Survey.css';
const Survey = () => {
    const navigate=useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [responses, setResponses] = useState({});
  const questions = [
    "Question 1: How satisfied are you with our products?",
    "Question 2: How fair are the prices compared to similar retailers?",
    "Question 3: How satisfied are you with the value for money of your purchase?",
    "Question 4: On a scale of 1-10 how would you recommend us to your friends and family?",
    "Question 5: What could we do to improve our service?",
  ];
  
  // Save responses to local storage whenever responses state changes
  
   var confirma=false;


  const handleRatingChange = (event) => {
    const { name, value } = event.target;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [name]: value,
    }));
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 1));
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) =>
      Math.min(prevQuestion + 1, questions.length)
    );
  };

  const handleSkip = () => {
    setCurrentQuestion((prevQuestion) =>
      Math.min(prevQuestion + 1, questions.length)
    );
  };

  const handleSubmit =() =>{
    localStorage.setItem("surveyResponses", JSON.stringify(responses));
    const confirmed = window.confirm(
      "Are you sure you want to submit the survey?"
    );

    if (confirmed) {
    navigate("/thankyou");}
    else{
      navigate("/survey");
    }
  }

  const renderQuestion = () => {
    if (currentQuestion <= 3) {
      return (
        <div>
          <h1 id="qn">{currentQuestion}/5</h1>
          <h2>{questions[currentQuestion - 1]}</h2>
          <div id="ops">
          <label>
            <input
              type="radio"
              name={`q${currentQuestion}`}
              value="1"
              onChange={handleRatingChange}
              checked={responses[`q${currentQuestion}`] === "1"}
            />
            1
          </label>
          <label>
            <input
              type="radio"
              name={`q${currentQuestion}`}
              value="2"
              onChange={handleRatingChange}
              checked={responses[`q${currentQuestion}`] === "2"}
            />
            2
          </label>
          <label>
            <input
              type="radio"
              name={`q${currentQuestion}`}
              value="3"
              onChange={handleRatingChange}
              checked={responses[`q${currentQuestion}`] === "3"}
            />
            3
          </label>
          <label>
            <input
              type="radio"
              name={`q${currentQuestion}`}
              value="4"
              onChange={handleRatingChange}
              checked={responses[`q${currentQuestion}`] === "4"}
            />
            4
          </label>
          <label>
            <input
              type="radio"
              name={`q${currentQuestion}`}
              value="5"
              onChange={handleRatingChange}
              checked={responses[`q${currentQuestion}`] === "5"}
            />
            5
          </label>
          </div>
          <div id="btns">
          {currentQuestion > 1 && (
            <button id="p" onClick={handlePrevious}>Previous</button>
          )}
          {currentQuestion < 5 && <button id="skip" onClick={handleSkip}>Skip</button>}
          {currentQuestion < 5 && <button id="s" onClick={handleNext}>Next</button>}
        </div>
        </div>
      );
    } 
    else if(currentQuestion === 4) {
        return (
          <div>
            <h1 id="qn">{currentQuestion}/5</h1 >
            <h2>{questions[currentQuestion - 1]}</h2>
            <div id="ops2">
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value="1"
                onChange={handleRatingChange}
                checked={responses[`q${currentQuestion}`] === "1"}
              />
              1
            </label>
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value="2"
                onChange={handleRatingChange}
                checked={responses[`q${currentQuestion}`] === "2"}
              />
              2
            </label>
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value="3"
                onChange={handleRatingChange}
                checked={responses[`q${currentQuestion}`] === "3"}
              />
              3
            </label>
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value="4"
                onChange={handleRatingChange}
                checked={responses[`q${currentQuestion}`] === "4"}
              />
              4
            </label>
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value="5"
                onChange={handleRatingChange}
                checked={responses[`q${currentQuestion}`] === "5"}
              />
              5
            </label>
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value="6"
                onChange={handleRatingChange}
                checked={responses[`q${currentQuestion}`] === "6"}
              />
              6
            </label>
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value="7"
                onChange={handleRatingChange}
                checked={responses[`q${currentQuestion}`] === "7"}
              />
              7
            </label>
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value="8"
                onChange={handleRatingChange}
                checked={responses[`q${currentQuestion}`] === "8"}
              />
              8
            </label>
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value="9"
                onChange={handleRatingChange}
                checked={responses[`q${currentQuestion}`] === "9"}
              />
              9
            </label>
            <label>
              <input
                type="radio"
                name={`q${currentQuestion}`}
                value="10"
                onChange={handleRatingChange}
                checked={responses[`q${currentQuestion}`] === "10"}
              />
              10
            </label>
            </div>
            <div id="btns">
            {currentQuestion > 1 && (
              <button id="p" onClick={handlePrevious}>Previous</button>
            )}
            {currentQuestion < 5 && <button id="skip" onClick={handleSkip}>Skip</button>}
            {currentQuestion < 5 && <button id="s"onClick={handleNext}>Next</button>}
          </div>
          </div>
        );
      } 
    
    
    else {
      return (
        <div>
          <h1 id="qn">{currentQuestion}/5</h1 >
          <h2>{questions[currentQuestion - 1]}</h2>
          <div id="ops">
          <textarea
            name={`q${currentQuestion}`}
            value={responses[`q${currentQuestion}`] || ""}
            onChange={handleRatingChange}
            placeholder="Type your suggestions or comments here..."
          />
          <br/>
          <input
              type="checkbox"
                name="chkbox"
                checked={confirma = true}
              
            />
            I would like to submit responses<br/>
            </div>
            <div id="btns">
          {currentQuestion > 1 && (
            <button id="p"onClick={handlePrevious}>Previous</button>
          )}
          {currentQuestion==5 &&(
            <button id="s" onClick={handleSubmit} disabled={!confirma}>Submit</button>
          )}
          </div>
        </div>
        
      );
    }
  };

  return <div>{renderQuestion()}</div>;
};

export default Survey;

