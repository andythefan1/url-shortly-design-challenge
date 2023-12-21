import './styles.css';

export const Button = ({ isRounded, onClick, isDisabled, children }) => {
	return (
		<button className='' onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	);
};
