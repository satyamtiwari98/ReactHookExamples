import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      Header
      <ul>
        <li>
          <Link to="/useState">useState</Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/useRef">useRef</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
