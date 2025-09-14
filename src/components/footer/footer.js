import "./footer.css"
const Footer = () => {
  return (
    <footer id="blog">

      <div >
        <div className="container ">
          <ul className="ul-list">
            <li className="list-item"><a href="#">Home</a></li>
            <li className="list-item"><a href="#">Food</a></li>
            <li className="list-item"><a href="#">Services</a></li>
            <li className="list-item"><a href="#">Contact</a></li>
          </ul>
          <ul className="ul-list">
            <li className="list-item"><a href="#">Blog</a></li>
            <li className="list-item"><a href="#">Menu</a></li>
            <li className="list-item"><a href="#">Gallery</a></li>
            <li className="list-item"><a href="#">chefs</a></li>

          </ul>
          <ul className="ul-list">
            <li className="list-item"><a href="#">Gallery</a></li>
            <li className="list-item"><a href="#">email</a></li>
            <li className="list-item"><a href="#">address</a></li>
            <li className="list-item"><a href="#">Phone</a></li>

          </ul>
        </div>
        <div className="copyright">
          © 2025, Food.com and create by Abdulla <span>Hatam</span>
        </div>
      </div>
    </footer>

  )
}

export default Footer;
