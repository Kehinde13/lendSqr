import view from '../assets/np_view_1214519_000000 1.png'
import activate from '../assets/np_user_2995993_000000 1.png'
import blacklist from '../assets/np_delete-friend_3248001_000000 1.png'
import "../Styles/Options.css"

const Options = () => {
  return (
    <div className='options'>
        <div>
            <img src={view} alt="" />
            View Details
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