import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

const App: React.FC = () => {
	// const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<Body />
		</>
	);
};

export default App;
