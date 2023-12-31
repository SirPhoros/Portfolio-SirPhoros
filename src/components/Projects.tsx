import LoveBirds from '../images/project/LoveBirds.png'
import Hive from '../images/project/Hive.png'
import BackEnd from '../images/project/BackEnd.png'
import Calculator from '../images/project/Calculator.png'

export default function Project() {
	return (
		<>
			<main>
				<h1 className="titlePage">Projects:</h1>
				<p>
					This is a collection of all the projects in which I have taken part.
					Either because they were my own work, or because I was part of a group
					project.{' '}
				</p>
				<section className="project">
					<section className="description">
						<h2>Love Birds:</h2>
						<p>
							Built as final project of the{' '}
							<strong>13-week Full Stack Northcoders Bootcamp</strong>, Love
							Birds is a fun and interactive application designed to keep the
							spark in long distance relationships.
						</p>
						<br />
						<p>
							This project has been built in{' '}
							<strong>
								TypeScript, Firebase, React Native and TailwindCSS.
							</strong>{' '}
							A different set of tools from the one the bootcamp was taught in.{' '}
							<br />
							Love Birds allows users to{' '}
							<strong>send images, videos and more</strong> to their loved ones.
							Upon receiving their message, users{' '}
							<strong>
								must answer a quiz question or play a game to 'hatch their egg'
							</strong>{' '}
							and receive their prize.
						</p>
						<p>
							Tools: This project has been built in{' '}
							<strong>
								Typescript, NodeJS, React Native, Firebas, and Tailwind.
							</strong>
						</p>
						<section className="projectButton">
							<button>
								<a
									href="https://github.com/SirPhoros/love-birds"
									target="_blank"
								>
									Code
								</a>
							</button>{' '}
							<button>
								<a
									href="https://northcoders.com/projects/june-2023/love-birds"
									target="_blank"
								>
									Presentation
								</a>
							</button>
						</section>
					</section>
					<section className="project_img">
						<img
							src={LoveBirds}
							alt="Love birds app screenshots"
						/>
					</section>
				</section>
				<section className="project">
					<section className="description">
						<h2>Angular Calculator:</h2>
						<p>
							Calculator built in <strong>Angular</strong>, to experiment with a
							different Front End framework.
						</p>
						<p>
							This calculator allows the user to: <br />
							<br />
							1. Enter numbers and perform calculations using the provided
							operators. <br />
							2. View the history of your recent operations.
						</p>
						<p>
							Future implementations: <br />
							<br />
							1. Incorporating additional operators, such as{' '}
							<strong>%, ± or ( )</strong>
							<br />
							2. Introducing a Scientific Mode for advanced mathematical
							operations. <br />
							3. Enhancing the user experience with a numeric keyboard input
						</p>
						<p>
							This project has been built in{' '}
							<strong>Angular, TypeScripe and Bootstrap.</strong>
						</p>
						<section className="projectButton">
							<button>
								<a
									href="https://github.com/SirPhoros/calculator-angular"
									target="_blank"
								>
									Code
								</a>
							</button>{' '}
						</section>
					</section>
					<section className="project_img">
						<img
							src={Calculator}
							alt="Calculator app screenshot"
						/>
					</section>
				</section>
				<section className="project">
					<section className="description">
						<h2>The Hive:</h2>
						<p>
							A mock forum inspired by Reddit, built as part of the Front End
							project phase for the Northcoders Bootcamp. articles and comments.
						</p>
						<br />
						<p>
							The Hive is built on the API fabricated for the Back End project,
							NC_News API (see below), which is used to request said information
							from the different databases built on <strong>Express.</strong>
							<br />
							The user will have the choice to <strong>filter</strong> the
							articles based on the topic, but also they will have the
							opportunity to <strong>filter</strong> by the amount of comments
							that the articles have, when it was published among other options.
							Finally, they will be able to comment in the articles, and vote
							the articles that they (dis)like the most.
						</p>
						<p>
							Tools: This project has been built in{' '}
							<strong>JavaScript, NodeJS, React, Vite, and CSS.</strong>
						</p>
						<section className="projectButton">
							<button>
								<a
									href="https://github.com/SirPhoros/CTorrubia_nc-news_FE"
									target="_blank"
								>
									Code
								</a>
							</button>{' '}
							<button>
								<a
									href="https://thehive-news.netlify.app/articles"
									target="_blank"
								>
									Live Demo
								</a>
							</button>
						</section>
					</section>
					<section className="project_img">
						<img
							src={Hive}
							alt="The Hive screenshots"
						/>
					</section>
				</section>
				<section className="project">
					<section className="description">
						<h2>NC_News API:</h2>
						<p>
							An API built with{' '}
							<strong>PostgreSQL, Express JS and Node JS</strong>, as part of
							the <strong>BE project phase of Northcoders bootcamp.</strong>{' '}
							This API functions as database to later on been used in "The Hive"
							(see above). There is a list of all the available endpoints
						</p>
						<br />
						<p>
							NC_NEWS API is built with the purpose of populating the Front End
							project "The Hive", as said project will render its content by
							calls into the API.
							<br />
							The API has been built using{' '}
							<strong>Express and PostgresSQL</strong>, with a pre-made set of
							data provided by the course for the purpose of having some initial
							data to fill our database.
							<br />
							Additionally, the process has been throughfully tested using
							<strong>the TDD technique and JEST</strong>, making sure that the
							project is <strong>bulletproof to SQL injections</strong>, but
							also to make sure that every endpoint returns the demanded
							information, without mutating the data provided.
							<br />
							On top of that testing the endpoints using JEST and TDD,{' '}
							<strong>
								Error Handling procedures have been put into place
							</strong>{' '}
							, to stop the user to have access to inexistent data, while
							offering useful and clear feedback.
						</p>
						<p>
							Tools: This project has been built in{' '}
							<strong>
								JavaScript, NodeJS, Express, PostgresSQL, and JEST.
							</strong>
						</p>
						<section className="projectButton">
							<button>
								<a
									href="https://github.com/SirPhoros/CTorrubia-News-Solo_Project-NC"
									target="_blank"
								>
									Code
								</a>
							</button>{' '}
							<button>
								<a
									href="https://nc-news-soloproject-be.onrender.com/"
									target="_blank"
								>
									Live Demo
								</a>
							</button>
						</section>
					</section>
					<section className="project_img">
						<img
							src={BackEnd}
							alt="API screenshots"
						/>
					</section>
				</section>
			</main>
		</>
	)
}
