import view from "../assets/np_view_1214519_000000 1.png";
import activate from "../assets/np_user_2995993_000000 1.png";
import blacklist from "../assets/np_delete-friend_3248001_000000 1.png";
import "../Styles/Options.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type Prop = {
  dropdownVisible: string | boolean | number | undefined;
  setDropdownVisible: (dropdownVisible: string | boolean) => void;
  userId: string | undefined;
};

const Options: React.FC<Prop> = ({
  dropdownVisible,
  setDropdownVisible,
  userId,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        dropdownVisible &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [dropdownVisible, setDropdownVisible]);

  return (
    <div className="options" ref={dropdownRef}>
      <div>
        <Link to={`userdetails/${userId}`} className="viewDetails">
          <img src={view} alt="" />
          View Details
        </Link>
      </div>
      <div>
        <Link to={`userdetails/${userId}`} className="viewDetails">
          <img src={blacklist} alt="" />
          Blacklist User
        </Link>
      </div>
      <div>
        <Link to={`userdetails/${userId}`} className="viewDetails">
          <img src={activate} alt="" />
          Activate User
        </Link>
      </div>
    </div>
  );
};

export default Options;
