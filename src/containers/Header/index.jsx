import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';

import './styles.css';

export const Header = () => {
	return (
		<nav className='header'>
			<ul className='nav-bar'>
				<Logo></Logo>
				<li>
					<a className='' href='/'>
						Features
					</a>
				</li>
				<li>
					<a className='' href='/'>
						Pricing
					</a>
				</li>
				<a className='' href='/'>
					Resources
				</a>
			</ul>

			<ul className='nav-bar'>
				<li>
					<a className='' href='/'>
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
