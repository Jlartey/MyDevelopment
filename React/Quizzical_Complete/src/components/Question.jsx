import React from "react";

export default function Question(props) {
    return (
        <div className="questionEl">
            <p className="trivia-question">{props.question}</p> 
        </div>
    )
}
