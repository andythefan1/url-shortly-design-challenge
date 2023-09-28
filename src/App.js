import './App.css';
import Logo from './components/Logo/Logo';

function App() {
	return (
		<div className='App'>
			<header>Header</header>
			<main>
				<section>Landing</section>
				<section>Shorten URL</section>
				<section>MoreInfo</section>
				<section>CTA</section>
			</main>
			<footer>
				Footer
				<Logo />
			</footer>
		</div>
	);
}

export default App;
