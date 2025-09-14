import "./contact.css"
const Contact = () => {
  return (
    <div id="contact" className="mt-5 pt-5  login-form">
      <div className="text-center">
        <h1 className="primaryText">Contact with Us</h1>

        <form className="mt-5 d-flex flex-column justify-content-center align-items-center">
          <div className="w-25 mb-2">
            <label className="">Username</label>
            <input className="form-control" type="text" placeholder="Username" required />
          </div>
          <div className="w-25 mb-2">
            <label>Email</label>
            <input className="form-control" type="email" placeholder="Email" required />
          </div>
          <div className="w-25 mb-2">
            <label>Password</label>
            <input className="form-control" type="password" placeholder="Password" required />
          </div>


          <button className="btn btn-lg btn-outline-success mb-5 mt-3 mb-5" type="submit">Loged in</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;