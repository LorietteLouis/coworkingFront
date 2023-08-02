import { Link, useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const search = event.target.search.value;

    navigate(`/search-results?search=${search}`);
  };
    return (
      <header className="header-top">
        <img className="header-top-logo"
          src="https://yt3.googleusercontent.com/ytc/AOPolaRmR7z00ZLkSDkbMHdT0UR5Ga_5kcsLR_Oz3dyUAg=s900-c-k-c0x00ffffff-no-rj"
          alt="SC groupe"
        />
        <h1>SioulCompany</h1>
      <nav>
        <ul>
          <li>
            <Link to="/"><button type="submit">Home</button></Link>
          </li>
          <li>
            <Link to="/admin/coworkings"><button type="submit">Coworkings</button></Link>
          </li>
          <li>
            <Link to="/admin/coworkings/create"><button type="submit">Création</button></Link>
          </li>
          <li>
            <Link to="/login"><button type="submit">Login</button></Link>
          </li>
          <li>
          <button type="submit">Logout</button>
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Search ..." />
        <button type="submit">Rechercher</button>
      {/* {!coworking ? (
        <p>No coworkings found</p>
      ) : (
      <div>LinktoResult</div>  
      )} */}
      </form>
    </header>
  );
};

export default HeaderAdmin;