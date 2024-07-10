import loadingIcon from '../assets/Loading_icon.gif'
import '../Styles/Loader.css'

const Loader = () => {
  return (
    <div className="loader"><img src={loadingIcon} alt="loader" /></div>
  )
}

export default Loader