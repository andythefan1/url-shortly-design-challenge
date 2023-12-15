export const Button = ({ onClick, isDisabled, children }) => {
	return (
		<button onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	);
};
