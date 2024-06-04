import React from "react";  

export default function Start(props) {
    return (
        <div className="landing-page">
            <h1>Quizzical</h1>
            <h4>Joe's Trivia App</h4>
            <button onClick={props.start}>Start Quiz</button>
        </div>
    )
}