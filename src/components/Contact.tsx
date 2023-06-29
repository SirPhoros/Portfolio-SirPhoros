import LinkedIn from '../../public/devicons/linkedin-original-wordmark.svg'
import GitHub from '../../public/devicons/github-original-wordmark.svg'

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
						"@in/cgtorrubia"
						<img
							src={LinkedIn}
							alt=""
						/>
					</a>
				</button>
				<button>
					<a
						href="https://github.com/SirPhoros"
						target="_blank"
					>
						@SirPhoros
					</a>
					<img
						src={GitHub}
						alt="Github"
					/>
				</button>
			</section>
		</>
	)
}
