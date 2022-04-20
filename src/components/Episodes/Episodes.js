import React, { useState, useEffect } from 'react';
import './episodes.css';
import { charImg } from './charImg.js';
import { useNavigate } from 'react-router-dom';

export default function Episodes() {
    const navigate = useNavigate();

    const [data, setData] = useState([])
    const [inputText, setInputText] = useState("");

    const url = 'https://breakingbadapi.com/api/episodes'

    async function getData() {
        const response = await fetch(url);
        const resJson = await response.json();
        // sorting data according to season
        const sortedResponse = resJson.sort(function (a, b) { return parseInt(a.season) - parseInt(b.season) });
        setData(sortedResponse)
    }

    useEffect(() => {
        getData()
    }, [])

    // console.log(charImg)

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const filteredData = data.filter((el) => {
        if (inputText === '') {
            return el;
        } else {
            return el.series.toLowerCase().includes(inputText) || el.title.toLowerCase().includes(inputText)
        }
    })

    var season = 1;
    function increment(x) {
        if (x === season) {
            season += 1;
            return true
        } else {
            return false
        }
    }

    function displayCar(title, data) {
        // console.log(data)
        navigate(`/episodes/card/${title}`, { state: data });
    }

    return (
        <div className='episodes-page'>
            <input onChange={inputHandler} className='search-character-episodes' placeholder='Search for your favorite series, titles' />
            <div className='all-episodes-cards'>
                {filteredData.map((ele, index) => {
                    return (
                        <>
                            {increment(ele.season) && (<div className='season-name'>{`Season ${season - 1}`}</div>)}
                            <div className='episode-card' key={index} onClick={() => displayCar(ele.episode_id, ele)}>
                                <div>
                                    <h1>Episode: {ele.episode}</h1>
                                    <h2>Series: {ele.series}</h2>
                                    <h3>Title: {ele.title}</h3>
                                    <p><strong>Date: {ele.air_date}</strong></p>
                                </div>
                                <div className='characters-image'>
                                    {ele.characters.map((e) => {
                                        for (var x = 0; x < charImg.length; x++) {
                                            if (charImg[x].name === e) {
                                                return (
                                                    <div className='character-description' key={x}>
                                                        <img src={charImg[x].img} alt={charImg[x].name} />
                                                        <p>{charImg[x].name}</p>
                                                    </div>
                                                )
                                            }
                                        }
                                        return ''
                                    })}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
