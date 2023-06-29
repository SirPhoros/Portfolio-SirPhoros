import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/skills"
					element={<Skills />}
				/>
				<Route
					path="/project"
					element={<Project />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}

export default App
