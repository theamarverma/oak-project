import React from 'react';
// import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Modal from './components/Modal';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

import 'primeicons/primeicons.css';

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
