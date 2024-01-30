import { Link } from 'react-router-dom';
import { HeaderStyled, Logo } from './HeaderStyled';
import { ReactComponent as BtnIcon } from '../../assets/images/svg/NaviOpen.svg';
import { ContainerStyled } from '../Container/ContainerStyled';

const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled $variant="header">
        <div>
          <Link to="/">
            <Logo />
          </Link>
          <button>
            <BtnIcon />
          </button>
        </div>
        <div>
          <Link to="tel:+86852346000">+86 852 346 000</Link>
          <Link to="/#reservations">Reservations</Link>
        </div>
        <div>
          <Link to="about">About</Link>
          <Link to="blogs">Blogs</Link>
          <Link to="contact">Contact</Link>
          <Link to="menu">Menu</Link>
        </div>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
