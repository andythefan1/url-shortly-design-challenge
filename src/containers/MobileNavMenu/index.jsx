import { Button } from '../../components/Button';

import './styles.css';

export const MobileNavMenu = ({ isOpen }) => {
	return (
		isOpen && (
			<nav className='mobile-nav-menu rounded'>
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
		)
	);
};
