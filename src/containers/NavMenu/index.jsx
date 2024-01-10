import { Button } from '../../components/Button';

import './styles.css';

export const NavMenu = () => {
	return (
		<nav className='nav-menu rounded'>
			<ul>
				<li className='nav-link'>
					<a href='/'>Features</a>
				</li>
				<li className='nav-link'>
					<a href='/'>Pricing</a>
				</li>
				<li className='nav-link'>
					<a href='/'>Resources</a>
				</li>
				<hr />
				<li className='nav-link'>
					<a href='/'>Login</a>
				</li>
				<li className='nav-link'>
					<Button isRounded>Sign Up</Button>
				</li>
			</ul>
		</nav>
	);
};
