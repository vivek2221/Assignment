
function NavBar({LoginFunc,RegisterFunc}) {
  return (
    <div className="navBar">
            <div className="container_of_logo_and_Button">
                <div className="JwtLogo">JWT Auth</div>
                <div className="buttonDivInNavBar">
                   <button className="buttonLogin" onClick={LoginFunc}>Login</button>
                   <button className="buttonRegister" onClick={RegisterFunc}>Register</button>
                </div>
            </div>
        </div>
  )
}

export default NavBar