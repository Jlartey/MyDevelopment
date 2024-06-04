import { nanoid } from 'nanoid';
import React from 'react';
import Start from './components/Start';
import Question from './components/Question';
import Answer from './components/Answer';
import Footer from './components/Footer';
import { decode } from 'html-entities';
import Confetti from 'react-confetti';

function App() {
  const [quiz, setQuiz] = React.useState([]);
  const [startGame,setStartGame] = React.useState(false);
  const [checking, setChecking] = React.useState(false);
  const [score, setScore] = React.useState();
  const [button, setButton] = React.useState();
  const [isFinished, setIsFinished] = React.useState(false);
  const [perfect, setPerfect] = React.useState(false);
  const [reset, setReset] = React.useState(false);

// fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
  React.useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&category=31")
        .then(res => res.json())
        .then(data => {
          const quizData = data.results.map(item => {

            const correctAnswer = item.correct_answer;
            const incorrectAnswers = item.incorrect_answers;
            const allAnswers = incorrectAnswers.concat(correctAnswer);

            const answerData = allAnswers.map(answer => {
              return {
                answer: decode(answer),
                isSelected: false,
                isCorrect: answer === item.correct_answer ? true : false,
                id: nanoid(),
                key: nanoid()
              };
            })
            return {
              question: decode(item.question),
              answers: shuffleAnswers(answerData),
              id: nanoid(),
              key: nanoid()
            };
          });
          setQuiz(quizData) 
        });
},[reset]) 

function shuffleAnswers(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const allQuizData = quiz.map(item => {
  return (
    <div>
      <Question question={item.question}/>
      <div className="choiceEl">
        {item.answers.map(answer => {
          return (
            <Answer 
              answer={answer.answer}
              isSelected={answer.isSelected}
              select={select}
              checkAnswers={checkAnswers}
              isCorrect={answer.isCorrect}
              answerId={answer.id}
              questionId={item.id}
              isFinished={false}
              checking={checking}
              />
          );
        })}
      </div>
    </div>
  );
});
console.log(allQuizData)
    
function select(answerId, questionId) {
  setQuiz(prevQuiz => {
    const quizData = prevQuiz.map(prev => {
      if (questionId === prev.id) {
        const answerData = prev.answers.map(answer => {
          if(answerId === answer.id) {
            console.log(true)
            return {
              ... answer,
              isSelected: true
            };
          } else if (answerId !== answer.id) {
            return {
              ...answer,
              isSelected: false
            };
          }
          return answer;
        });
        return {...prev, answers: answerData}
      } else return prev;
    });
    return quizData
  });
}

function start() {
  setStartGame(prevStartGame => {
    if(!startGame) {
      setStartGame(true)
      setScore("Score")
      setButton("Check Score")
    } 
  });
}

function checkAnswers() {
  if(isFinished) {
    generateQuiz();
  } else {
    setChecking(true)
    console.log("Check Answers")
    finishGame();
  }
}

function generateQuiz() {
  setReset(!reset)
  setStartGame(false)
  setChecking(false)
  setPerfect(false)
  setIsFinished(false)
}

function finishGame() {
  let results = 0;
  quiz.map(item => {
    item.answers.map(answer => {
      if(answer.isSelected && answer.isCorrect){
        results++;
      }
        if (results == 5) {
          setPerfect(true);
        } else {
          setPerfect(false);
        }
    })
  })
  setIsFinished(true)
  setScore(`You scored ${results}/5 answers correct`)
  setButton("Play Again")
}

console.log(quiz)

  return (
    <main>
        {
          !startGame
          ?
          <div >
            <Start start={start}/>
          </div>
          :
          <div>
            <p>Joe Lartey is here</p>
            {checking && perfect ? <Confetti/> : ""}
            {allQuizData}
            <Footer score={score} button ={button} checkAnswers={checkAnswers} />
          </div>
        }
    </main>
  )
}

export default App
