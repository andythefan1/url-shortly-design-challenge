export const SubmitButton = ({ onClick, children }) => {
	return (
		<button onClick={onClick} type='submit'>
			{children}
		</button>
	);
};
