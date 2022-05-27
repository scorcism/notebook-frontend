import { useContext } from "react";
import noteContext from "../context/noteContext";

// This is for a single note
const Note = ({ id, title, description, tag }) => {
    const { deleteNote } = useContext(noteContext);
    let bg = 'yellow';
    // console.log("id: ",id, " tag  ",tag)
    if (tag.localeCompare("imp") == 0) {
        bg = '#ff000047' //red
    }
    if (tag.localeCompare("todo") == 0) {
        bg = '#00800061' //green
    }
    if (tag.localeCompare("personal") == 0) {
        bg = '#ffff007a' //yellow
    }

    return (
        <>
            <div className="note__container" style={{ backgroundColor: bg }}>
                <div className="note__head">
                    <div className="title">
                        {title}
                    </div>
                    <div className="time">
                        {tag}
                    </div>
                </div>
                <div className="note__body">
                    {description && <p>{description}</p>}
                </div>
                <div className="note_foot">
                    <p title="coming soon" className="update actionbtn">update</p>
                    <p onClick={(e)=>{deleteNote(id)}} className="delete actionbtn">Delete</p>
                </div>
            </div>
        </>
    )
}

export default Note;