export default function Project() {
	return (
		<>
			<section>
				<h1>Project:</h1>
				<p>
					This is a collection of all the projects in which I have taken part.
					Either because they were my own work, or because I was part of a group
					project.{' '}
				</p>
			</section>
			<section>
				<section>
					<h2>Love Birds:</h2>
					<p>
						Built as final project of the 13-week Full Stack Northcoders
						Bootcamp, Love Birds is a fun and interactive application designed
						to keep the spark in long distance relationships.
					</p>
					<br />
					<p>
						This project has been built in TypeScript, Firebase, React Native
						and TailwindCSS. A different set of tools from the one the bootcamp
						was taught in. <br />
						Love Birds allows users to send images, videos and more to their
						loved ones. Upon receiving their message, users must answer a quiz
						question or play a game to 'hatch their egg' and receive their
						prize.
					</p>
				</section>
				<section>
					<h2>The Hive:</h2>
					<p>
						A mock forum inspired by Reddit, built as part of the Front End
						project phase for the Northcoders Bootcamp. articles and comments.
					</p>
					<br />
					<p>
						The Hive is built on the API fabricated for the Back End project,
						NC_News API (see below), which is used to request said information
						from the different databases built on Express.
						<br />
						The user will have the choice to filter the articles based on the
						topic, but also they will have the opportunity to filter by the
						amount of comments that the articles have, when it was published
						among other options. Finally, they will be able to comment in the
						articles, and vote the articles that they (dis)like the most.
					</p>
					<p>
						Tools: This project has been built in JavaScript, NodeJS, React,
						Vite, and CSS.
					</p>
				</section>
				<section>
					<h2>NC_News API:</h2>
					<p>
						An API built with PostgreSQL, Express JS and Node JS, as part of the
						BE project phase of Northcoders bootcamp. This API functions as
						database to later on been used in "The Hive" (see above). There is a
						list of all the available endpoints
					</p>
					<br />
					<p>
						NC_NEWS API is built with the purpose of populating the Front End
						project "The Hive", as said project will render its content by calls
						into the API.
						<br />
						The API has been built using Express and PostgresSQL, with a
						pre-made set of data provided by the course for the purpose of
						having some initial data to fill our database.
						<br />
						Additionally, the process has been throughfully tested using the TDD
						technique and JEST, making sure that the project is bulletproof to
						SQL injections, but also to make sure that every endpoint returns
						the demanded information, without mutating the data provided.
						<br />
						On top of that testing the endpoints using JEST and TDD, Error
						Handling procedures have been put into place, to stop the user to
						have access to inexistent data, while offering useful and clear
						feedback.
					</p>
					<p>
						Tools: This project has been built in JavaScript, NodeJS, Express,
						PostgresSQL, and JEST.
					</p>
				</section>
			</section>
		</>
	)
}
