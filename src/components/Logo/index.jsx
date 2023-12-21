import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import './styles.css';

export const Logo = ({ inverse }) => {
	return <LogoSvg className={inverse ? 'logo logo--inverse' : 'logo'} />;
};
