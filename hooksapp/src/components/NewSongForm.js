import React, {useState} from 'react';

const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(title)
        addSong(title)
        setTitle("")
    }

    return ( 
        <form onSubmit={handleSubmit} action="">
            <label>Song Name:</label>
            <input 
                type="text" 
                value={title} 
                required 
                onChange={(e)=>(setTitle(e.target.value))}
            />
            <button>Add Song</button>
        </form>
     );
}
 
export default NewSongForm;