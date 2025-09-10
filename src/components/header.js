const Header = () => {
  return (
    <div >
      <form className="d-flex mt-5 pt-5 justify-content-center align-items-center" role="search">
        <div className="d-flex mt-5 ms-5 w-50 text-center">
          <input className="form-control px-3 mx-2" type="search" placeholder="Search for Food..." aria-label="Search" />
          <button className="btn btn-outline-success " type="submit">Search </button>

        </div>
      </form>
      <div className="backimage"></div>
      
     

    </div>
  )
}

export default Header;