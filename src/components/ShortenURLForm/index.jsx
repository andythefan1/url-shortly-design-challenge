import { URLInput } from '../URLInput';
import { SubmitButton } from '../SubmitButton';

import './styles.css';

export const ShortenURLForm = ({ onChange, onSubmit, url, error }) => {
	const onSubmitClick = (e) => {
		e.preventDefault();

		onSubmit();
	};

	return (
		<form className='submit-url-form'>
			<URLInput
				placeholder='Shorten a link here...'
				label={error}
				isError={error}
				onChange={onChange}
			>
				value={url}
			</URLInput>
			<SubmitButton onClick={onSubmitClick}>Shorten it!</SubmitButton>
		</form>
	);
};
