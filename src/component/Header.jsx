import { useState } from "react";
import { Link } from "react-router-dom";
let user_loggedin = false;
if(localStorage.getItem("auth-token")){
    user_loggedin = true;
}

const Header = () => {
    const [user,setUser] = useState("XD");
    const token = localStorage.getItem("auth-token")
    
    const getUserName = async () => {
        const res = await fetch("https://notebookscor32k.herokuapp.com/api/auth/getuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        let json = await res.json();
        // console.log(json.result[0])
        setUser(json.result[0].name)
    }
    if(user_loggedin){
        getUserName();
    }
    return (
        <>
            <div className="head__container">
                <div className="head__left">
                    <h3>
                        <Link to="/" className="font-25 no_desc fancy_heading">
                            noteb00k
                        </Link>
                    </h3>
                </div>
                <div className="head__mid">
                    {user && <>Hello _<p> {user}</p></> }
                </div>
                <div className="head__right">
                    <Link className="no_desc hover_underlinebox add_bg" to="/about">About</Link>
                    {!user_loggedin ? 
                    <>
                    <Link className="no_desc hover_underlinebox" to="/signup">Signup</Link>
                    <Link className="no_desc hover_underlinebox" to="/login">Login</Link>
                    </>
                    : 
                    <p className="no_desc hover_underlinebox logout" onClick={(e)=>{
                      localStorage.removeItem("auth-token");
                      location.replace("/")  
                    }} >Logout</p>
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Header;