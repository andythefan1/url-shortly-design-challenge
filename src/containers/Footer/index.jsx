import { ReactComponent as FacebookIcon } from '../../assets/socials/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/socials/icon-instagram.svg';
import { ReactComponent as PintrestIcon } from '../../assets/socials/icon-pinterest.svg';
import { ReactComponent as TwitterIcon } from '../../assets/socials/icon-twitter.svg';
import { Logo } from '../../components/Logo';

import './styles.css';

export const Footer = () => {
	return (
		<div className='footer'>
			<Logo inverse />
			<div className='footer-links'>
				<div className='footer-sitemap'>
					<div className='footer-sitemap-column'>
						<h3 className='footer-link-header'>Features</h3>
						<ul className='footer-link-body'>
							<li className='footer-link-text'>
								<a href='/' className=''>
									Link Shortening
								</a>
							</li>
							<li className='footer-link-text'>
								<a href='/' className=''>
									Branded Links
								</a>
							</li>
							<li className='footer-link-text'>
								<a href='/' className=''>
									Analytics
								</a>
							</li>
						</ul>
					</div>
					<nav className='footer-sitemap-column'>
						<h3 className='footer-link-header'>Resources</h3>
						<ul className='footer-link-body'>
							<li className='footer-link-text'>
								<a href='/' className=''>
									Blog
								</a>
							</li>
							<li className='footer-link-text'>
								<a href='/' className=''>
									Developers
								</a>
							</li>
							<li className='footer-link-text'>
								<a href='/' className=''>
									Support
								</a>
							</li>
						</ul>
					</nav>
					<div className='footer-sitemap-column'>
						<h3 className='footer-link-header'>Company</h3>
						<ul className='footer-link-body'>
							<li className='footer-link-text'>
								<a href='/' className=''>
									About
								</a>
							</li>
							<li className='footer-link-text'>
								<a href='/' className=''>
									Our Team
								</a>
							</li>
							<li className='footer-link-text'>
								<a href='/' className=''>
									Careers
								</a>
							</li>
							<li className='footer-link-text'>
								<a href='/' className=''>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
				<nav>
					<ul className='footer-social-icons'>
						<li>
							<a href='#'>
								<FacebookIcon className='social-icon'></FacebookIcon>
							</a>
						</li>
						<li>
							<a href='#'>
								<InstagramIcon className='social-icon'></InstagramIcon>
							</a>
						</li>
						<li>
							<a href='#'>
								<PintrestIcon className='social-icon'></PintrestIcon>
							</a>
						</li>
						<li>
							<a href='#'>
								<TwitterIcon className='social-icon'></TwitterIcon>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
