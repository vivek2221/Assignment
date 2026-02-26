
function Content({LoginFunc,RegisterFunc}) {
  return (
    <div className="contentMainDiv">
        <div className="centerElementContainingDiv">
            <div className="contentFirst">JWT Authentication System</div>
            <div className="contentSecond">Role-Based Access Control with MERN Stack</div>
            <div className="white_Box">
               <div>Features</div>
               <div className="allContents"><img src="./tick.svg" style={{width:'20px',heigh:'20px'}}></img>Secure JWT token-based authentication</div>
               <div className="allContents"><img src="./tick.svg" style={{width:'20px',heigh:'20px'}}></img>Three role levels: User, Manager, and Admin</div>
               <div className="allContents"><img src="./tick.svg" style={{width:'20px',heigh:'20px'}}></img>Protected routes with role-based authorization</div>
               <div className="allContents"><img src="./tick.svg" style={{width:'20px',heigh:'20px'}}></img>Responsive design with Tailwind CSS</div>
            </div>
            <div className="mainButtonsLoginAndRegisterDiv">
                <button className="buttonLogin" onClick={LoginFunc} >Login</button>
                <button className="buttonRegister" onClick={RegisterFunc}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Content