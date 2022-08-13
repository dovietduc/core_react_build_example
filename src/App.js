import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Counter from './components/Counter';

function App() {

	const [counter, setCounter] = useState(0);

	const handleIncrement = () => {
		setCounter(counter + 1);
	}

    return (
		<div className="App">
			<Counter 
				onHandleIncrement={handleIncrement}
				counter={counter}
			/>
		</div>
	);
}

export default App;
