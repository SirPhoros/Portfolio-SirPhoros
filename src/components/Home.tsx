import LinkedIn from '../../public/devicons/linkedin-original-wordmark.svg'
import GitHub from '../../public/devicons/github-original-wordmark.svg'

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
					<a href="https://www.linkedin.com/in/cgtorrubia">
						"LinkedIn"
						<img
							src={LinkedIn}
							alt=""
						/>
					</a>
				</button>
				<button>
					<a href="https://github.com/SirPhoros">Github</a>
					<img
						src={GitHub}
						alt="Github"
					/>
				</button>
			</section>
		</>
	)
}
