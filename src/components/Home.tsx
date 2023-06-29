import { BsLinkedin, BsGithub } from 'react-icons/bs'
export default function Home() {
	return (
		<>
			<h2>Welcome, my name is… </h2>
			<h1>Cristóbal G. Torrubia</h1>
			<h3>I am a Junior Full Stack Developer</h3>
			<section>
				<p>
					I'm constantly expanding my knowledge and honing my skills in
					JavaScript, building web-based solutions that go beyond mere
					functionality. I strive to create meaningful applications that
					facilitate connections between people, ultimately enriching their
					lives with increased comfort and convenience.
				</p>
			</section>
			<section className="button">
				<button>
					<a
						href="https://www.linkedin.com/in/cgtorrubia"
						target="_blank"
					>
						<BsLinkedin />
						LinkedIn
					</a>
				</button>{' '}
				<button>
					<a
						href="https://github.com/SirPhoros"
						target="_blank"
					>
						<BsGithub />
						Github
					</a>
				</button>
			</section>
		</>
	)
}
