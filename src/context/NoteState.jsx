import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://notebookscor32k.herokuapp.com"
  const [userCred, setuserCred] = useState("abhishek is here");
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("auth-token")

  const getUserCred = async () => {
    const res = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    });
    let json = await res.json();
    // console.log(json.result[0])
    setuserCred(json.result[0])
  }

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": token
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": token
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
  }

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": token
      },
      body: JSON.stringify({ id })
    });
    const note = await response.json();
  }



  return (
    <NoteContext.Provider value={{ getUserCred, userCred, notes, getNotes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;