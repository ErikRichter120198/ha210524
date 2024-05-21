import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function addNumbers(a, b) {
  return a + b;
}

function calculateSquareRoot(number) {
  return Math.sqrt(number);
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const sum = addNumbers(number1, number2);
  const squareRoot = calculateSquareRoot(number2);

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <h1 className="red-text">Das ist ein Beipiel Satz!</h1>
      <p className="blue-text">Hallo ich bins Tim!</p>
      <p style={{ color: 'green', fontSize: '18px' }}>Ich bin der Hulk!</p>
      <h2 style={{ color: 'purple', fontSize: '30px' }}>Und ich bin Lila!</h2>

      <h3 style={{ color: 'orange', fontSize: '22px' }}>
        Die Summe aus {number1} und {number2} ist: {sum}
      </h3>
      <h3 style={{ color: 'teal', fontSize: '22px' }}>
        Die Quadratwurzel aus {number2} ist {squareRoot}
      </h3>

      <p style={{ color: 'brown', fontSize: '20px' }}>
        Eine zufällige Zahl zwischen 1 und 100: {randomNumber}
      </p>
      <p style={{ color: 'darkblue', fontSize: '20px' }}>
       Das heutige Datum ist: {currentDate}
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
