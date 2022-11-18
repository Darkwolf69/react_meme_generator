import React from "react";
import MemesData from "../MemesData.js"

export default function Meme() {
    
    let url;

    function getMemeImage() {
        const memesArray = MemesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url);
    }

    return (
        <main >
            <p>{url}</p>
            <div className="form">
                <input className="form--input" type="text" placeholder="Top text"/>
                <input className="form--input" type="text" placeholder="Bottom text"/>
                <button onClick={getMemeImage} className="form--button" >Get a new meme image</button>
            </div>
        </main>
    )
}