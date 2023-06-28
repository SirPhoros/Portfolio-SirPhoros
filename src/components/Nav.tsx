import { Link } from 'react-router-dom'

export default function Nav() {
	return (
		<nav className="nav">
			<Link to="/">Home </Link>
			<Link to="/about">About </Link>
			<Link to="/skills">Skills </Link>
			<Link to="/project">Project </Link>
			<Link to="/contact">Contact </Link>
		</nav>
	)
}
