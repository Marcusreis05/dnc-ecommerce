import dncLogo from '../../assets/logo.svg';
import "./index.scss"

export const Header = () => {
  return (
    <div className='header'>
      <img src={dncLogo} alt="" />
    </div>
  )
}

export default Header;
