import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex flex-row justify-center mx-10 mt-3 p-2 bg-red-500 ">
      <div className="p-4">
        <h3>Satyam Tiwari</h3>
      </div>
      <div className="flex flex-row items-end mx-20 p-4 gap-5 ">
        <div>
          <Link to="/useState">useState</Link>
        </div>
        <div>
          <Link to="/useEffect">useEffect</Link>
        </div>
        <div>
          <Link to="/useRef">useRef</Link>
        </div>
        <div>
          <Link to="/UseLocalstorage">useLocalstorage</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
