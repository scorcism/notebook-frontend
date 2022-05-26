import { Link } from "react-router-dom";

const Header = () => {
    
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
                    Lorem ipsum dolor
                </div>
                <div className="head__right">
                    <Link className="no_desc hover_underlinebox" to="/about">About</Link>
                    <Link className="no_desc hover_underlinebox" to="/signup">Signup</Link>
                    <Link className="no_desc hover_underlinebox add_bg" to="/login">Login</Link>
                </div>
            </div>
        </>
    )
}

export default Header;