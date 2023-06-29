import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Contact() {
	return (
		<>
			<h1>You can find me in:</h1>
			<section className="button">
				<button>
					<a
						href="https://www.linkedin.com/in/cgtorrubia"
						target="_blank"
					>
						<BsLinkedin /> @in/cgtorrubia
					</a>
				</button>{' '}
				<button>
					<a
						href="https://github.com/SirPhoros"
						target="_blank"
					>
						<BsGithub /> @SirPhoros
					</a>
				</button>
			</section>
		</>
	)
}
