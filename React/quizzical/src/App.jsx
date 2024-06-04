import React from "react";
import Trivia from "./Trivia";
// import triviaData from "./triviaData";

export default function App() {
    const [allTriviaData, setAllTriviaData] = React.useState([])
    const [start, setStart] = React.useState(false)
   

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setAllTriviaData(data.results))
    },[]) 

    // console.log(allTriviaData[2])
    
    function getTrivia() {
        const triviaArray = []
        for (let i = 0; i < allTriviaData.length; i++) {
            const trivia = {
                question: allTriviaData[i].question,
                answer: allTriviaData[i].incorrect_answers.concat(allTriviaData[i].correct_answer),
                // right_answer: allTriviaData[i].correct_answer
            }
            triviaArray.push(trivia)
        }
        return triviaArray
    }
    
    const [myTriviaArray, setMyTriviaArray] = React.useState([])
   
    // console.log(myTriviaArray)

    console.log(getTrivia())

    const triviaElements = myTriviaArray.map(trivia => (
        <Trivia 
          question = {trivia.question}
          answer1 = {trivia.answer[0]}
          answer2 = {trivia.answer[1]}
          answer3 = {trivia.answer[2]}
          answer4 = {trivia.answer[3]}
        />
    ))

    function startGame() {
        setStart(true)
        setMyTriviaArray(getTrivia())
    }
    
    return (
        <main> 
            {
                !start 
                ? 
                <div className="landing-page">
                    <h1>Quizzical</h1>
                    <h4>Joe's Trivia App</h4>
                    <button onClick={startGame}>Start Quiz</button>
                </div>
                :
                <div className="trivia">
                  {/* <h3>Joe Lartey is here</h3> */}
                  {triviaElements}
                  <button className="check-answers">Check Answers</button>
                </div>
            }
        </main>
    )
}