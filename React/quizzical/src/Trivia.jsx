import React from "react";

export default function Trivia(props) {
    const [clicked, setClicked] = React.useState(false)
    function handleClick() {
        setClicked(true)
    }

   
    const styles= {
        backgroundColor: clicked ? "red" : ""
    }



    return (
        <div>
            <h4 className="trivia-question">{props.question}</h4>
            <div className="answer-btn">
                <button style={styles} onClick={handleClick}>{props.answer1}</button>
                <button style={styles} onClick={handleClick}>{props.answer2}</button>
                <button style={styles} onClick={handleClick}>{props.answer2}</button>
                <button style={styles} onClick={handleClick}>{props.answer4}</button>
            </div>
            {/* <hr/> */}
        </div>
    )
}



 // function handleClick2() {
    //     setClicked(true)
    // }

    // function handleClick3() {
    //     setClicked(true)
    // }

    // function handleClick4() {
    //     setClicked(true)
    // }

    
    // const styles2 = {
    //     backgroundColor: clicked ? "red" : ""
    // }

    // const styles3 = {
    //     backgroundColor: clicked ? "red" : ""
    // }

    // const styles4 = {
    //     backgroundColor: clicked ? "red" : ""
    // }
