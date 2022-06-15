import React, { useState, useEffect } from "react";
import SongList from "../components/SongList";

const SongsContainer = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
      getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
    }

    return (

        <>
            <SongList songs={songs}/>
        </>
    )


}


export default SongsContainer;