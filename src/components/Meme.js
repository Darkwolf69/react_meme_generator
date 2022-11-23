import React, {useState} from "react";
import MemesData from "../MemesData.js"

export default function Meme() {
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState(MemesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = (memesArray[randomNumber].url);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));

    }

    return (
        <main >          
            <div className="form">
                <input className="form--input" type="text" placeholder="Top text"/>
                <input className="form--input" type="text" placeholder="Bottom text"/>
                <button onClick={getMemeImage} className="form--button" >Get a new meme image</button>
            </div>
            <img src={meme.randomImage} className="meme--image"></img>
        </main>
    )
}