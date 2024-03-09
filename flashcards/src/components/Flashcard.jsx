import React, { useState } from 'react';
import './Flashcard.css'; // Import CSS file for styling

function Flashcard() { // setShowAnswer is a function that changes the state of showAnswer
    const cardPairs = [
        // for every index, we have a pair of dictionaries
        { question: 'Cocinar', answer: 'To cook!' },
        { question: 'Leer', answer: 'To read!' },
        { question: 'Nadar', answer: 'To swim!' },
        { question: 'Volar', answer: 'To fly!' },
        { question: 'Bailar', answer: 'To dance!' }
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0); // keep track of which card to use
    const [showAnswer, setShowAnswer] = useState(false); // keep track of whether to show the answer

    const card = cardPairs[currentCardIndex]; // get the current card from the cardPairs array

    const handleNext = () => {
        const newIndex = Math.floor(Math.random() * cardPairs.length);
        setCurrentCardIndex(newIndex); // update current card index
        setShowAnswer(false);
    }

    // setShowAnswer to true
    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

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
            <div>
                {<div><button className="next-button" onClick={handleNext}>Next</button></div>}

            </div>
        </span>
    );
}


export default Flashcard;