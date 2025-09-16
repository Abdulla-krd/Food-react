import { Link } from "react-scroll";
import Logo from "../assets/img/logo.png"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid">
          <a className="text-white navbar-brand  mx-5" href="#">
            <img className="logo" src={Logo} width={50}></img>
          </a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className=" bg-light navbar-toggler-icon rounded-1"></span>
          </button>
          <div className="collapse navbar-collapse mx-5 " id="navbarNav">
            <ul className="navbar-nav ms-auto ps-5 mx-5">
              <li className="nav-item px-3">
                <Link activeClass="active"
                  to="header"
                  spy={false}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link  active" aria-current="page" href="#">Home
                  
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link activeClass="active"
                  to="food"
                  spy={false}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  className="nav-link text-white" href="#">Food
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link activeClass="active"
                  to="services"
                  spy={false}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link text-white" href="#">Services
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link activeClass="active"
                  to="contact"
                  spy={false}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link text-white " href="#" >Contact
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link activeClass="active"
                  to="blog"
                  spy={false}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="nav-link text-white " href="#" >Blog
                </Link>
              </li>

              <button type="button" className="btn btn-success  ms-2">Login</button>
            </ul>





          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;