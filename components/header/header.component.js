import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link to="/">
            HOMEPAGE
        </Link>
        <Link to="/contact">
            CONTACT
        </Link>
        <Link to="/aboutme">
            ABOUT ME
        </Link>
        <Link to="/login">
            LOGIN
        </Link>
    </div>
);

export default Header;