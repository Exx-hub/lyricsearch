import React, { useContext, Fragment } from "react";
import { LyricAppContext } from "../../contexts/Context";
import Spinner from "../layout/Spinner";
import Track from "./Track";

function Tracks() {
  const { trackList, heading } = useContext(LyricAppContext);

  if (trackList === undefined || trackList.length === 0) return <Spinner />;

  return (
    <Fragment>
      <h1 className="search-heading">{heading}</h1>
      <div className="tracks-container">
        {trackList.map((track) => (
          <Track key={track.track.track_id} track={track} />
        ))}
      </div>
    </Fragment>
  );
}

export default Tracks;
