import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';

import './styles.css';

export const Header = () => {
	return (
		<nav className='nav-bar'>
			<ul className='nav-link-list'>
				<Logo></Logo>
				<li>
					<a className='nav-link' href='/'>
						Features
					</a>
				</li>
				<li>
					<a className='nav-link' href='/'>
						Pricing
					</a>
				</li>
				<a className='nav-link' href='/'>
					Resources
				</a>
			</ul>

			<ul className='nav-link-list'>
				<li>
					<a className='nav-link' href='/'>
						Login
					</a>
				</li>
				<li>
					<Button isRounded>Sign up</Button>
				</li>
			</ul>
		</nav>
	);
};
