import React, { useState, useEffect } from "react";
import axios from "axios";

export const LyricAppContext = React.createContext();

const url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`;

function ContextProvider({ children }) {
  const [heading, setHeading] = useState("Top 10 tracks");
  const [trackList, setTrackList] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setTrackList(res.data.message.body.track_list);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <LyricAppContext.Provider
      value={{ heading, trackList, setTrackList, setHeading }}
    >
      {children}
    </LyricAppContext.Provider>
  );
}

export default ContextProvider;
