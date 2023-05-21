import React from 'react'
import { QuizData } from "../Data/QuizData"
import { useState } from 'react'
import Result from './Result'
const Quiz = () => {

    const [currQuestion, setCurrQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clickedOption, setClickedOption] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const changeQuestion = () => {
        updateScore();
        if (currQuestion < QuizData.length - 1) {

            setCurrQuestion(currQuestion + 1);
            setClickedOption(0);
        }
        else {
            setShowResult(true)
        }
    }
    const updateScore = () => {
        if (clickedOption === QuizData[currQuestion].answer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false)
        setCurrQuestion(0)
        setClickedOption(0)
        setScore(0)
    }
    return (
        <>
            <div>
                <p className='heading-txt'>Quiz App</p>
                <div className='container'>
                    {showResult ? (
                        <Result score={score} totalScore={QuizData.length}  tryAgain={resetAll}/>
                    ) : (
                        <>
                            <div className='question'>
                                <span id='question-number'>{currQuestion + 1}.</span>
                                <span id='question-txt'>{QuizData[currQuestion].question}</span>
                            </div>
                            <div className='option-container'>
                                {QuizData[currQuestion].options.map((option, i) => {
                                    return (
                                        <button
                                            className={`option-btn ${clickedOption == i + 1 ? "checked" : null
                                                }`}
                                            key={i}
                                            onClick={() => setClickedOption(i + 1)}
                                        >
                                            {option}
                                        </button>
                                    )
                                })}
                            </div>
                            <input type='button' value="Next" id="next-button" onClick={changeQuestion} />
                        </>)}
            </div>
            </div>
        </>
    )
}

export default Quiz