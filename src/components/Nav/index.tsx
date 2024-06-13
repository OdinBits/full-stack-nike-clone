import headerLogo from '../../assets/images/header-logo.svg';
import hamburger from '../../assets/icons/hamburger.svg';
import { navLinks } from '../../shared/constants';
import './style.scss';

const Nav: React.FC = () => {
    return (
        <header className="navHeader">
            <nav className="navContent">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className="ulContainer">
                    {navLinks.map((item) => (
                        <li key={`links-${item.label}`}>
                            <a href={item.href} className="linkTag">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hamburgerBlock">
                    <img
                        src={hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav
