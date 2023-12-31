import dncLogo from '../../assets/logo.svg';
import "./index.scss"
import cartLogo from "../../assets/cartLogo.png"

export const HeaderMenu = () => {
  return (
    <header className='header-menu'>
      <img src={dncLogo} alt="ERROR" className='header-menu__logo' />
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
    
    <div className='header-menu__cart-shop'>
      <p>Meu Carrinho</p>
      <img src={cartLogo} alt="ERROR" width='40px' />
    </div>
    </header>
  );
}

export default HeaderMenu;
