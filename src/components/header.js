const Header = () => {
  return (
    <div>
      <form className="d-flex mt-5 justify-content-center align-items-center" role="search">
        <div className="d-flex mt-5 w-50 text-center">
          <input className="form-control " type="search" placeholder="Search for Food..." aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search </button>

        </div>
      </form>
      <div className="image">
        <h1>abdulla</h1>
      </div>
    
    </div>
  )
}

export default Header;