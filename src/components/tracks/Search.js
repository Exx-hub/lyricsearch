import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { LyricAppContext } from "../../contexts/Context";

function Search() {
  const { setTrackList, setHeading } = useContext(LyricAppContext);
  const [input, setInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        if (input !== "") {
          setTrackList(res.data.message.body.track_list);
          setHeading(`Top 10 for: ${trackTitle}`);
        }
      })
      .catch((error) => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackTitle]);

  const findTrack = (e) => {
    e.preventDefault();
    setTrackTitle(input);
    // getQuery();
  };

  return (
    <div className="search-container">
      <h1>
        <i className="fas fa-music" />
        Search for a song
      </h1>
      <h3>Get Lyrics for Your Tracks</h3>
      <form onSubmit={findTrack}>
        <input
          type="text"
          placeholder="search for a song..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Get Track Lyrics</button>
      </form>
    </div>
  );
}

export default Search;
