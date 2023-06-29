import {
	BsCodeSquare,
	BsFillRocketTakeoffFill,
	BsFillPersonVcardFill,
	BsFillChatSquareTextFill,
} from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Nav() {
	return (
		<nav className="nav">
			<Link to="/">
				<AiFillHome /> Home{' '}
			</Link>
			<Link to="/about">
				<BsFillPersonVcardFill /> About{' '}
			</Link>
			<Link to="/skills">
				<BsCodeSquare /> Skills{' '}
			</Link>
			<Link to="/project">
				<BsFillRocketTakeoffFill /> Projects{' '}
			</Link>
			<Link to="/contact">
				<BsFillChatSquareTextFill /> Contact{' '}
			</Link>
			<div className="bottom-part"></div>
		</nav>
	)
}
