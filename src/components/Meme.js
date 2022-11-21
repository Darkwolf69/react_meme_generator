import React, {useState} from "react";
import MemesData from "../MemesData.js"

export default function Meme() {
    
    const [memeImage, setMemeImage] = useState("");

    function getMemeImage() {
        const memesArray = MemesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);

    }

    return (
        <main >          
            <div className="form">
                <input className="form--input" type="text" placeholder="Top text"/>
                <input className="form--input" type="text" placeholder="Bottom text"/>
                <button onClick={getMemeImage} className="form--button" >Get a new meme image</button>
            </div>
            <img src={memeImage} className="meme--image"></img>
        </main>
    )
}