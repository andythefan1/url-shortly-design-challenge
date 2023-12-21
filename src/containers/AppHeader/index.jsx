import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';

import './styles.css';

export const AppHeader = () => {
	return (
		<div className='nav-bar'>
			<nav>
				<Logo></Logo>
				<ul>
					<li>
						<a className='nav-link' href='/'>
							Features
						</a>
						<a className='nav-link' href='/'>
							Pricing
						</a>
						<a className='nav-link' href='/'>
							Resources
						</a>
					</li>
				</ul>
			</nav>
			<nav>
				<a className='nav-link' href='/'>
					Login
				</a>
				<Button>Sign up</Button>
			</nav>
		</div>
	);
};
