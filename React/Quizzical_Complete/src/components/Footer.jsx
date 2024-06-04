import React from "react";

export default function Footer(props) {
    return(
       
            <div className="footerEl">
                <p>{props.score}</p>
                <button className="play-again-btn" onClick={props.checkAnswers}>
                    {props.button}
                </button>
            </div>
        
    )
}