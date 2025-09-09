const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="text-white navbar-brand  mx-5" href="#">Navbar</a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className=" bg-light navbar-toggler-icon rounded-1"></span>
          </button>
          <div className="collapse navbar-collapse mx-5" id="navbarNav">
            <ul className="navbar-nav ms-auto ps-5 mx-5">
              <li className="nav-item px-3">
                <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-white" href="#">Food</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-white" href="#">Order</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-white disabled" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
              </li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <button type="button" className="btn btn-success  ms-2">Login</button>


          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;