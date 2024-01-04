import React, {useState} from 'react';
import uuid from "react-uuid"
import NewSongForm from './NewSongForm';

const SongList = () => {

    const [ songs, setSongs ] = useState([
        {title: "Almost Done", id:1},
        {title: "Memory Gospel", id:2},
        {title: "This Wild Darkness", id:3}
    ])

    const addSong = (title="New Song")=>{
        console.log(title)
        setSongs([...songs, {title, id:uuid()}])
    }

    return (
        <div className="song-list">
            <ul>
                {songs.map((song)=>{
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            {/* <button onClick={addSong}>Add Song</button> */}
            <NewSongForm addSong={addSong}/>
        </div>
     );
}
 
export default SongList;