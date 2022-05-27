import { useState,useContext } from "react";
import noteContext from "../context/noteContext";

const Form = () => {
    const { addNote } = useContext(noteContext);
    const [data, setData] = useState({
        title:"",
        description: "",
        tag: ""
    })
    const [error, setError] = useState("");
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        // console.log(data);
        addNote(data.title,data.description,data.tag);
        setData({
            title:"",
            description:"",
            tag:""
        })
        // console.log(data)
    }
   

    return (
        <>

            <div className="right__menu">
                <h4 className="font20">Add a Note</h4>
            </div>
            <div className="form">
                <div className="form__body">
                    <div className="form_div form_title">
                        <label htmlFor="title">Title:</label>
                        <input value={data.title} onChange={onChange} type="text" name="title" id="title" />
                    </div>
                    <div className="form_div form_desc">
                        <label htmlFor="desc">Description:</label>
                        <textarea value={data.description} onChange={onChange} name="description" id="desc" cols="25" rows="10"></textarea>
                    </div>
                    <div  className="form_div form_tag">
                        <label htmlFor="tag">Tag:</label>
                        <select onChange={onChange} name="tag" id="tags">
                            <option value="personal">Personal</option>
                            <option value="imp">Important</option>
                            <option value="todo">Todo</option>
                        </select>
                    </div>
                    <input onClick={formSubmit} type="submit" value="Add Note" id="submit" />
                    
                </div>
            </div>
        </>

    )
}


export default Form;