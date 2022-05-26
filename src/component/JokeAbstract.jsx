import React from 'react'
import { useState,useEffect } from 'react'

const JokeAbstract = () => {
  const [joke, setJoke] = useState("There is a huge difference between huge and difference");
  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };
  useEffect(() => {
    fetchApi();
  }, [])
  return (
    <>
      <div className="joke__container">
        <div className="abstract">
          <h3 className='font-25'>Noteb00k</h3>
          <p>This is a NoteB00k app made using React JS, HTML, CSS and for backend Node JS, Express, validators, jwt, bcryptjs and for DB MYSQL</p>
        </div>
        <div className="joke">
          <h3 className='font-25'>Joke for you</h3>
          <p>{joke}</p>
          <p className='changeJoke hover_underlinebox' onClick={fetchApi}>Change Joke</p>
        </div>
      </div>
    </>
  )
}

export default JokeAbstract