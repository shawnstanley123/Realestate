import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css'; 

export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='shawn'
			userSecret='321'
			projectID='2866b948-1b2b-4218-bd0f-928fc5d9835a'
		/>
	);
}

export default App;  
