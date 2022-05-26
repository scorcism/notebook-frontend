const Header = () => {
    return (
        <>
            <div className="head__container">
                <div className="head__left">
                    <h3>
                        <a href="" className="font-25 no_desc fancy_heading">
                            noteb00k
                        </a>
                    </h3>
                </div>
                <div className="head__mid">
                    Lorem ipsum dolor
                </div>
                <div className="head__right">
                    <a className="no_desc hover_underlinebox" href="">About</a>
                    <a className="no_desc hover_underlinebox" href="">Signup</a>
                    <a className="no_desc hover_underlinebox add_bg" href="">Login</a>
                </div>
            </div>
        </>
    )
}

export default Header;