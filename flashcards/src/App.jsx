import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'; // imports the Flashcard component

const App = () => {

  return (
    <div className="App">
      <div>
        <h1 className = "title"> Learn Spanish! </h1>
        <img src="https://media.istockphoto.com/id/1181470320/vector/language-translation.jpg?s=612x612&w=0&k=20&c=INP6J9qfuOSMkuRiKoLrIdysFkDHoS2JxjBheRK7NKE="  alt="image" width="500" height="300"/>
        <h2> You will be presented a word in Spanish. Your job is to translate it to English. </h2>
        <h2> Number of cards: 5 </h2>
      </div>
      
      <Flashcard />

      
      </div>
  )
}

export default App
