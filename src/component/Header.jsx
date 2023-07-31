import { Link, useNavigate } from "react-router-dom";

const Header = () => {
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coworkings">ListCoworking</Link>
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Search ..." />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  );
};

export default Header;