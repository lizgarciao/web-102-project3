const UserInput = ({inputValue, handleInputChange, handleSubmission, showAnswer, isCorrect}) => {
    return (
        <div className='text-input-container'>
            <label htmlFor="text-input">Enter your answer: </label>
            <input
                id="text-input"
                value={inputValue} // state variable of current input value
                name = "text-input"
                type = "text"
                onChange={handleInputChange}
                onKeyDown={handleSubmission}
            />
            <button type="submit" onClick={handleSubmission} style={{marginLeft: '2rem' }}> Submit</button>
            {showAnswer && isCorrect && (
                <p id='correct'>Correct! 😊 </p>
            )}
            {showAnswer && !isCorrect && (
                <p id='wrong'>Incorrect! 😔 </p>
            )}
        </div>
    )
}

export default UserInput;
