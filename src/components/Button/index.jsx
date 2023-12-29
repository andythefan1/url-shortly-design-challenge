import './styles.css';

export const Button = ({
	isPrimary,
	isRounded,
	onClick,
	isDisabled,
	children,
}) => {
	let classList = '';
	if (isPrimary) {
		classList += 'primary ';
	}
	if (isRounded) {
		classList += 'rounded-large';
	}
	return (
		<button className={classList} onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	);
};
