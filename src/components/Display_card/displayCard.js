import React from 'react'
import { useLocation } from 'react-router-dom';
import './displaycard.css';
import { charImg } from '../Episodes/charImg';


export default function DisplayCard() {
    let location = useLocation();
    console.log(location);
    var data = location.state

    function googleSearch(name) {
        var link = `https://www.google.com/search?q=${name}`
        window.open(link)
    }

    return (
        <div className='display-card'>
            <div className='display-card-details'>
                <h1>Season {data.season}</h1>
                <h1>Episode {data.episode}</h1>
                <h1>Title: {data.title}</h1>
                <h1>Series: {data.series}</h1>
            </div>
            <div className='display-card-img-contaier'>
                {data.characters.map((e) => {
                    for (let x = 0; x < charImg.length; x++) {
                        if (charImg[x].name === e) {
                            return (
                                <div className='display-card-character-details' key={x} onClick={() => googleSearch(charImg[x].name)}>
                                    <img src={charImg[x].img} alt={charImg[x].name} />
                                    <p>{charImg[x].name}</p>
                                </div>
                            )
                        }
                    }
                    return '';
                })}
            </div>
        </div>
    )
}
