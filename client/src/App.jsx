/* eslint-disable react/no-unknown-property */
import './App.css'
import Title from './components/Title'
import Element from './components/Element'
import '@picocss/pico'
import Keyboard from './components/Keyboard'

function App() {

	return (
		<div className="margin-top" align="center">
		<Title/>
		<Element/>
		<Keyboard/>
		</div>
	)
}

export default App
