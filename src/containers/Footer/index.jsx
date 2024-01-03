import { ReactComponent as FacebookIcon } from '../../assets/socials/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/socials/icon-instagram.svg';
import { ReactComponent as PintrestIcon } from '../../assets/socials/icon-pinterest.svg';
import { ReactComponent as TwitterIcon } from '../../assets/socials/icon-twitter.svg';
import { Logo } from '../../components/Logo';

import './styles.css';

export const Footer = () => {
	return (
		<div>
			{' '}
			<Logo inverse />
			<div className='footer-links'>
				<div className='footer-link-container'>
					<div className='footer-link-header'>Features</div>
					<nav>
						<ul className='footer-link-list'>
							<li className='footer-link-text'>
								<a href='/'>Link Shortening</a>
							</li>
							<li className='footer-link-text'>
								<a href='/'>Branded Links</a>
							</li>
							<li className='footer-link-text'>
								<a href='/'>Analytics</a>
							</li>
						</ul>
					</nav>
				</div>

				<nav className='footer-social-icons'>
					<ul>
						<li>
							<FacebookIcon></FacebookIcon>
						</li>
						<li>
							<InstagramIcon></InstagramIcon>
						</li>
						<li>
							<PintrestIcon></PintrestIcon>
						</li>
						<li>
							<TwitterIcon></TwitterIcon>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
