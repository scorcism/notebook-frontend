import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import noteContext from '../context/noteContext'
import Form from "./Form";
import Note from "./Note";

let user_loggedin = false;
if (localStorage.getItem("auth-token")) {
    user_loggedin = true;
}

const Body = () => {
    const { notes, getNotes } = useContext(noteContext);
    useEffect(() => {
        getNotes();
        //eslint-disable-next-line
    }, [notes])
    // console.log(notes)
    let allNote = notes.result
    // console.log(allNote)

    return (
        <>
            {user_loggedin ? <div className="body__container" id="body">
                <div className="body__left">
                    <div className="left__menu">
                        <p className="font20 black  no_desc add_bordertransparent border_radius hover_underline">All Notes</p>
                        <p className="font20 black  no_desc add_bordertransparent border_radius hover_underline">Personal</p>
                        <p className="font20 black  no_desc add_bordertransparent border_radius hover_underline">Imp</p>
                        <p className="font20 black  no_desc add_bordertransparent border_radius hover_underline">todo</p>
                    </div>
                    <div className="notes">
                        {allNote && allNote.map((note) => {
                            return <Note key={note.id} tag={note.tag} id={note.id} title={note.title} description={note.description} />
                            // console.log("Note")
                        })}
                    </div>
                </div>
                <div className="body__right">
                    <Form />
                </div>
            </div>
                :
                <div className="container">
                    <div className="content">

                        <h2>Welcome to Wonderland :)</h2>
                        <div className="handle">
                            <Link className="hover_underline blogin" to="/login">Login</Link>
                            <p>or</p>
                            <Link className="hover_underline blogin" to="/signup">Sign up</Link>
                        </div>
                        <p className="magic">To See MAGIC</p>
                    </div>
                </div>
            }
        </>
    )
}

export default Body;