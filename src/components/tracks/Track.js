import React from "react";
import { Link } from "react-router-dom";

function Track({ track }) {
  const { album_name, artist_name, track_name, track_id } = track.track;
  return (
    <div className="track-card">
      <h4>{artist_name}</h4>

      <p>
        <i className="fas fa-play-circle"></i>Track: {track_name}
      </p>
      <p>
        <i className="fas fa-record-vinyl"></i>Album: {album_name}
      </p>

      <Link to={`/thisiswhereiwanttogo/${track_id}`}>
        <button>
          <i className="fas fa-chevron-right" /> View Lyrics
        </button>
      </Link>
    </div>
  );
}

export default Track;
