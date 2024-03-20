import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../pages/both.css";
const section = () => {
  const [getData, setGetData] = useState([]);
  const [searchMovie, setSearchMovie] = useState(null);
  const swapFunc = (e) => {
    setSearchMovie(e.target.value);
  };
  const searchFunc = () => {
    const filteredData = getData.filter((movie) =>
      movie.title.toLowerCase().includes(searchMovie.toLowerCase())
    );
    setGetData(filteredData);
  };
  console.log(searchMovie);
  useEffect(() => {
    const pullData = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/368f59cfcda0f686c1f6"
        );
        setGetData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    pullData();
  }, []);
  console.log(getData);
  return (
    <>
      <header>
        <input type="text" onChange={swapFunc} />
        <button className="btn" onClick={searchFunc}>
          search
        </button>
        <p>Sharing a few of our favorite movies</p>
      </header>
      <div className="part">
        {getData.map((element, index) => (
          <div key={index} className="partition">
            <h1>{element.title}</h1>
            <p>{element.description}</p>
            <p>{element.year}</p>
            <a href={element.imdb_link}>
              <img src={element.image} alt="idk" className="image" />
            </a>
          </div>
        ))}
        <a href="https://github.com/nurullaibadov">
          <p className="byCreated">Created by Nurulla 😉</p>
        </a>
      </div>
    </>
  );
};

export default section;
