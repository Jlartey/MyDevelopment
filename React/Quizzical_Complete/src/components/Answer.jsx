import React from "react";

export default function Answer(props) {
    
    let buttonStyle;

    if (props.checking === false) {
        if(props.isSelected === true) {
            buttonStyle = "choice selected";
        } else {
            if (props.isSelected === false) {
                buttonStyle = "choice transparent";
            }
        }
    } else if (props.checking === true) {
        if (props.isSelected === true && props.isCorrect === true) {
            buttonStyle = "choice correct "
        } else if (props.isSelected === true && props.isCorrect === false) {
            buttonStyle = "choice incorrect "
        } else if (props.isSelected === false && props.isCorrect === true) {
            buttonStyle = "choice correct "
        } else if (props.isSelected === false && props.isCorrect === false) {
            buttonStyle = "choice transparent"
        }
    }
    return (
        <button  
            className={buttonStyle}
            onClick={()=> props.select(props.answerId,props.questionId)}
            key={props.id}
            >
                {props.answer}
        </button>
     );
}