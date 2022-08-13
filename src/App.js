import logo from './logo.svg';
import './App.css';
import {createContext, useState} from 'react';
import Counter from './components/Counter';

export const ForceRenderContext = createContext();

function App() {

	const [forceRender, setForceRender] = useState(false);

	const callbackForceRender = () => {
		setForceRender(!forceRender);
	}

    return (
		<ForceRenderContext.Provider value={{callbackForceRender: callbackForceRender}}>
			<div className="App">
				<Counter/>
			</div>
		</ForceRenderContext.Provider>
	);

}

export default App;

// react props drillling


// 1. store sẽ lưu trữ các state global(state đặt App componnent)
// 2. khi có bất kì thay đổi nào trên state thì App component sẽ re-render