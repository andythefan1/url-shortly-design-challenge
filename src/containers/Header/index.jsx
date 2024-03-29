import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { ReactComponent as MenuIcon } from '../../assets/icons/icon-hamburger-menu.svg';

import './styles.css';

export const Header = ({ onClickNavMenu }) => {
	return (
		<nav className='header'>
			<ul className='nav-bar'>
				<Logo></Logo>
				<li className='nav-link'>
					<a className='' href='/'>
						Features
					</a>
				</li>
				<li className='nav-link'>
					<a className='' href='/'>
						Pricing
					</a>
				</li>
				<li className='nav-link'>
					<a className='' href='/'>
						Resources
					</a>
				</li>
			</ul>
			<ul className='nav-bar'>
				<li className='nav-link'>
					<a className='' href='/'>
						Login
					</a>
				</li>
				<li className='nav-link'>
					<Button isRounded>Sign Up</Button>
				</li>
				<li className='nav-menu'>
					<MenuIcon onClick={onClickNavMenu}></MenuIcon>
				</li>
			</ul>
		</nav>
	);
};
