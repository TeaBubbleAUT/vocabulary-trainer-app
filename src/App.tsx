import { useEffect, useState } from 'react';
import './App.css';
import ShowWord from './components/ShowWord';
import Word from './entity/Word';
import WordService from './services/WordService';
import Result from './components/Result';
import Start from './components/Start';

function App() {

  const [words, setWords] = useState<Word[]>([]);
  const [word, setWord] = useState<Word>({ id: 0, word: "", article: "" });
  const [result, setResult] = useState<boolean>();
  const [amount, setAmount] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(0);

  useEffect(() => {
    WordService
      .getAll()
      .then(response => {
        setWords(response);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>, word: Word) => {
    console.log(event.currentTarget.value);
    checkAnswer(event.currentTarget.value, word);
  }

  const getNextRandomWord = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleAnswerCount();
    setRandomWord(event);
    setResult(undefined);
  }

  const checkAnswer = (userInput: string, word: Word) => {
    if (userInput === word.article) {
      setResult(true);
    } else {
      setResult(false);
    }
  }

  const handleAnswerCount = () => {
    if (result) {
      setCorrectAnswerCount(correctAnswerCount + 1);
    }
    else {
      setWrongAnswerCount(wrongAnswerCount + 1);
    }
  }

  const setRandomWord = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (count <= amount) {
      const randomIndex = Math.floor(Math.random() * words.length);
      setWord(words[randomIndex]);
      setCount(count + 1);
    }
    else {
      alert("Du hast alle Wörter gelernt! " + "Richtig beantwortet: " + correctAnswerCount + " Falsch beantwortet: " + wrongAnswerCount + "");
    }
  }

  const handleSetAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.currentTarget.value));
  }

  return (
    <div>
      <Start setRandomWord={setRandomWord} setAmount={handleSetAmount} />
      <ShowWord word={word} result={result} handleUserInput={handleUserClick} getNextRandomWord={getNextRandomWord} />
      <Result result={result} correctAnswerCount={correctAnswerCount} wrongAnswerCount={wrongAnswerCount} />
    </div>
  );
}

export default App;