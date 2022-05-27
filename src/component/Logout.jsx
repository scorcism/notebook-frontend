
const Logout = () => {
    localStorage.removeItem("auth-token")
    window.location("/login")
    return (
        <>
        Logout
        </>
    )
}

export default Logout;