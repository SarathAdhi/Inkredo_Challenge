import React, { useState, useEffect } from 'react';
import './home.css';

export default function Home() {

    const [data, setData] = useState([])
    const [inputText, setInputText] = useState("");

    const url = 'https://breakingbadapi.com/api/characters'

    async function getData() {
        const response = await fetch(url);
        const resJson = await response.json();
        setData(resJson)
    }
    useEffect(() => {
        getData()
    }, [])
    
    // var string = '';
    // data.map(e => {
    //     string = string + `{"name": "${e.name}","img": "${e.img}"},`
    // })
    // console.log(string)

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const filteredData = data.filter((el) => {
        if (inputText === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(inputText)
        }
    })

    return (
        <div className='home-page'>
            <input onChange={inputHandler} className='search-character' placeholder='Search for your favorite character' />
            <div className='cards'>
                {filteredData.map((ele, index) => {
                    return (
                        <div key={index} className='character-card'>
                            <div className='card-style'></div>
                            <div className='character-details'>
                                <img src={ele.img} className='character-img' alt=''/>
                                <h1>{ele.name}</h1>
                                <p> <strong>Nickname: {ele.nickname}</strong></p>
                                <p> <strong>Born Day: {ele.birthday}</strong></p>
                                <p> <strong>Portrayed: {ele.portrayed}</strong></p>
                                <p> <strong>Category: {ele.category}</strong></p>
                                <p><strong>Status: {ele.status}</strong></p>
                                <div className='character-occupation'>
                                    <p><strong>Occupation:</strong></p>
                                    {ele.occupation.map((e, i) => {
                                        return (
                                            <p key={i} className='occupation'><strong>{e}, </strong></p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
