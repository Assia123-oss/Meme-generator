import React from "react";

const Memes = () => {
  const [memes, setMemes] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("http://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMemes((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMemes((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={memes.topText}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={memes.bottomText}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={memes.randomImage} className="meme--image" />
        <h2 className="meme--text top">{memes.topText}</h2>
        <h2 className="meme--text bottom">{memes.bottomText}</h2>
      </div>
    </main>
  );
};

export default Memes;
