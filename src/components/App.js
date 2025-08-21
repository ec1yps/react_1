import './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Article from './article/Article.js';
import Nav from './nav/Nav.js';

function App(props) {
	return (
		<div className="App">
			<Header />
			<Nav navigation={props.navigation} />
			<Article title="Современные десктопные процессоры архитектуры x86 общие принципы работы (x86 CPU digest 2.0)"
				content="Здесь будет содержимое статьи" />
			<Footer />
		</div>
	);
}

export default App;