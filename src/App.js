import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Counter from './components/Counter';

function App() {

	const [forceRender, setForceRender] = useState(false);

	const callbackForceRender = () => {
		setForceRender(!forceRender);
	}

    return (
		<div className="App">
			<Counter callbackForceRender={callbackForceRender}/>
		</div>
	);


}

export default App;


// 1. store sẽ lưu trữ các state global(state đặt App componnent)
// 2. khi có bất kì thay đổi nào trên state thì App component sẽ re-render