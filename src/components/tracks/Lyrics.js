import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import Spinner from "../layout/Spinner";

function Lyrics(props) {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.anyvariableparam}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((result) => {
        console.log(result.data.message.body.lyrics);
        setLyrics(result.data.message.body.lyrics);

        return axios
          .get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.anyvariableparam}&apikey=${process.env.REACT_APP_MM_KEY}`
          )
          .then((res) => {
            // console.log(res.data.message.body.track);
            setTrack(res.data.message.body.track);
          })
          .catch((err) => console.log(err));
      })

      .catch((error) => console.log(error));
  }, [props.match.params.anyvariableparam]);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />;
  } else {
    return (
      <div className="lyrics-container">
        <Link to="/">
          <button>Back</button>
        </Link>

        <div className="title-lyrics-body">
          <h3>
            <strong>{track.track_name}</strong>
            {` by: ${track.artist_name}`}
          </h3>

          <p>{lyrics.lyrics_body}</p>
        </div>

        <div className="track-deets">
          <h3>{`Track Rating : ${track.track_rating}`}</h3>
          <h3>{`Album ID: ${track.album_id}`}</h3>
          <h3>Explicit Content: {track.explicit ? "Yes" : "none"} </h3>
          <h3>
            Release Date:{" "}
            <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
          </h3>
        </div>
      </div>
    );
  }
}
export default Lyrics;
