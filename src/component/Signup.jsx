import { useState } from 'react'
const Signup = () => {
    const [cred, setCred] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("");
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        console.log(cred);
        const res = await fetch("https://notebookscor32k.herokuapp.com/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password })
        });

        const json = await res.json();
        // console.log(json)
        if (!json.error) {
            // Save the auth token and redirect
            // console.log(json.authtoken)
            localStorage.setItem('auth-token', json.authtoken);
            location.replace('/');
        }
        setError(json.error)
        setCred({
            name:"",
            email: "",
            password: ""
        })
    }
    return (
        <>
            <div className="signup__container">
                <div className="s_data">
                    <div className="s_head">
                        <h2 className="sh_h2 fancy_heading">NOTEB00K</h2>
                        <p className="sh_p">
                            This is a notebook app your data will be stored on third party site :)
                        </p>
                    </div>
                    <div className="s_body">
                        <h3>Sign up to Create a New Account</h3>
                        <div className="s_form">
                            <div className="name">
                                <input autoComplete="off" value={cred.name} onChange={onChange} type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className="email">
                                <input autoComplete="off" value={cred.email} onChange={onChange} type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="password">
                                <input autoComplete="off" value={cred.password} onChange={onChange} type="text" name="password" id="password" placeholder="Password" />
                            </div>
                            <input onClick={formSubmit} type="submit" value="Signup" />
                        </div>
                    </div>
                    <div className="error_message">
                    <p>{error}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup