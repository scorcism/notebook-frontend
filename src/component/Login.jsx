import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    let navigate = useNavigate();
    const host = ''
    const [cred, setCred] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("");
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        // console.log(cred);
        const res = await fetch("https://notebookscor32k.herokuapp.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: cred.email, password: cred.password })
        });

        const json = await res.json();
        console.log(json)
        if (!json.error) {
            // Save the auth token and redirect
            localStorage.setItem('auth-token', json.authtoken);
            location.replace('/');
        }
        setError(json.error)
        setCred({
            email: "",
            password: ""
        })
    }
    return (
        <>
            <div className="login__container">
                <div className="l_data">
                    <div className="l_head">
                        <h2 className="lh_h2 fancy_heading">NOTEB00K</h2>
                        <p className="lh_p">
                            This is a notebook app your data will be stored on third party site :)
                        </p>
                    </div>
                    <div className="l_body">
                        <h3>Login In to Your Account</h3>
                        <div className="l_form">
                            <div className="email">
                                <input value={cred.email} onChange={onChange} type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="password">
                                <input value={cred.password} onChange={onChange} type="text" name="password" id="password" placeholder="Password" />
                            </div>
                            <input onClick={formSubmit} type="submit" value="Login" />
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

export default Login