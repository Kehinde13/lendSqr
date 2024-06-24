import view from '../assets/np_view_1214519_000000 1.png'
import activate from '../assets/np_user_2995993_000000 1.png'
import blacklist from '../assets/np_delete-friend_3248001_000000 1.png'
import "../Styles/Options.css"
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

type Prop = {
  dropdownVisible: number | null
  setDropdownVisible: (dropdownVisible: number | null) => void
  userId: string
}

const Options = ({dropdownVisible, setDropdownVisible, userId}: Prop) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownVisible(null);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [dropdownRef, setDropdownVisible, dropdownVisible]);

  return (
    <div className='options' ref={dropdownRef} >
        <div>
          <Link to={`userdetails/${userId}`}>
            <img src={view} alt="" />
            View Details
          </Link>
        </div>
        <div>
            <img src={blacklist} alt="" />
            Blacklist User
        </div>
        <div>
            <img src={activate} alt="" />
            Activate User
        </div>
    </div>
  )
}

export default Options