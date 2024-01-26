import { Link } from 'react-router-dom';
import { Logo } from './HeaderStyled';

const Header = () => {
  return (
    <div style={{ backgroundColor: '#233000' }}>
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
};

export default Header;
