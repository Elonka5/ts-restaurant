import { Link } from 'react-router-dom';
import { HeaderStyled, Logo } from './HeaderStyled';
import { ReactComponent as BtnIcon } from '../../assets/images/svg/NaviOpen.svg';
import { ContainerStyled } from '../Container/ContainerStyled';

interface HeaderProps {
  scrollToSection: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
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
          <a href="#reservations" onClick={scrollToSection}>
            Reservations
          </a>
        </div>
        <div>
          <Link to="about">About</Link>
          <Link to="blog">Blogs</Link>
          <Link to="contact">Contact</Link>
          <Link to="menu">Menu</Link>
          <Link to="portfolio">Portfolio</Link>
        </div>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
