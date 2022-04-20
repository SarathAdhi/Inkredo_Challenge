import React, { useState, useEffect } from 'react';
import './quotes.css';

export default function Quotes() {

    const [data, setData] = useState([])
    const [result, setResult] = useState([])
    const [state, setState] = useState(false)

    const url = 'https://breakingbadapi.com/api/quotes'

    async function getData() {
        const response = await fetch(url);
        const resJson = await response.json();
        // sorting data according to season
        setData(resJson)
        setState(true)
    }

    useEffect(() => {
        getData();
    }, [])

    var rand;

    function randomQuotes() {
        rand = Math.floor(Math.random() * data.length)
        document.querySelector('.answer').style.display = "none"
        document.querySelector('.question').style.display = "block"
        document.querySelector('.question-btn').innerHTML= "Next Question"
        setResult(data[rand])
    }

    function showAnswer() {
        document.querySelector('.answer').style.display = "block"
    }


    return (
        <div className='quotes-page'>
            {!state && (
                <p className='loading'>Loading</p>
            )}
            {state && (
                <div className='quotes-section'>
                    <h1 className='question'>{result.quote}</h1>
                    <p className='answer'>{result.author}</p>
                    <div>
                        <button onClick={randomQuotes} className='question-btn'>Question</button>
                        <button onClick={showAnswer}>Show answer</button>
                    </div>
                </div>
            )}
        </div>
    )
}
