import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import TheNavigation from './components/TheNavigation';
import Home from './views/Home';
import Tunes from './views/Tunes';
import About from './views/About';

function App() {
	return (
		<div className="App App-header">
			<header>
				<TheNavigation />
			</header>
			<main className="content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/tunes" component={Tunes} />
					<Route path="/about" component={About} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
