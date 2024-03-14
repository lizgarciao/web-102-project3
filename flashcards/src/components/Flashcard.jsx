import React, { useState } from 'react';
import './Flashcard.css'; // Import CSS file for styling
import UserInput from './UserInput';

function Flashcard() { // setShowAnswer is a function that changes the state of showAnswer
    const cardPairs = [
        // for every index, we have a pair of dictionaries
        { question: 'Cocinar', answer: 'To cook' },
        { question: 'Leer', answer: 'To read' },
        { question: 'Nadar', answer: 'To swim' },
        { question: 'Volar', answer: 'To fly' },
        { question: 'Bailar', answer: 'To dance' }
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0); // keep track of which card to use
    const [showAnswer, setShowAnswer] = useState(false); // keep track of whether to show the answer
    const [inputValue, setInputValue] = useState(''); // keep track of the input value
    const [isCorrect, setIsCorrect] = useState(false); // check if answer is correct
    const card = cardPairs[currentCardIndex]; // get the current card from the cardPairs array

    const handleNext = () => {
        let newIndex = currentCardIndex;
        if (!(newIndex === cardPairs.length - 1)) {
            newIndex += 1;
        }
        setCurrentCardIndex(newIndex); // update current card index
        setShowAnswer(false);
        setInputValue(''); // Clear the input value
    }

    const handlePrev = () => {
        let newIndex = currentCardIndex;
        if (!(newIndex === 0)) {
            newIndex -= 1;
        }
        setCurrentCardIndex(newIndex); // update current card index
        setShowAnswer(false);
        setInputValue(''); // Clear the input value
    }

    // setShowAnswer to true
    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmission = (event) => {  
        if (event.key === 'Enter' || event.type === 'click') {
            if (inputValue.toLowerCase() === cardPairs[currentCardIndex].answer.toLowerCase()) {
                setIsCorrect(true);
            } else {
                setIsCorrect(false);
            }
            setShowAnswer(true);
        }
        
    }

    return (
        <span className="flashcard-container">
            <div className="flashcard" onClick={toggleAnswer}>
                <div className="flashcard-content">
                    {showAnswer ? (
                        <div>
                            <div className="flashcard-answer">
                                <h3>Answer:</h3>
                                <h3 className='answer'>{card.answer}</h3>
                            </div>
                        </div>
                    ) : (
                        <div className="flashcard-question">
                            <h3>What does this word mean? </h3>
                            <h3 className='question'>{card.question}</h3>
                        </div>
                    )}
                </div>
            </div>
            <UserInput
                inputValue = {inputValue} 
                handleInputChange = {handleInputChange} 
                handleSubmission = {handleSubmission}
                showAnswer = {showAnswer} 
                isCorrect = {isCorrect}
            />

            <div className='button-container'>
                <div><button id='back-button' onClick={handlePrev}>Back</button></div>
                <div><button id="next-button" onClick={handleNext}>Next</button></div>

            </div>
        </span>
    );
}


export default Flashcard;