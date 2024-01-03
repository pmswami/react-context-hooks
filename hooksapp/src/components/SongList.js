import React, {useState} from 'react';
import uuid from "react-uuid"

const SongList = () => {

    const [ songs, setSongs ] = useState([
        {title: "Almost Done", id:1},
        {title: "Memory Gospel", id:2},
        {title: "This Wild Darkness", id:3}
    ])

    const addSong = ()=>{
        setSongs([...songs, {title:"New Song", id:uuid()}])
    }

    return (
        <div className="song-list">
            <ul>
                {songs.map((song)=>{
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <button onClick={addSong}>Add Song</button>
        </div>
     );
}
 
export default SongList;