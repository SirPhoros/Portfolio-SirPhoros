import { SKILLS, LEARNING } from '../data/Skills'

export default function Skills() {
	return (
		<main>
			<h1 className="titlePage">Skills:</h1>
			<section className="skills">
				<div className="description">
					<p>
						My core skill set includes{' '}
						<strong>JavaScript, React, and PSQL</strong>, with knowledge about
						several frameworks including{' '}
						<strong>Express, React Native, Vite, and Expo</strong>. I am adapted
						to <strong>Agile methodologies</strong>, implementing
						Test-Driven-Development to conduct both unit & integration tests
						with <strong>Jest</strong>. For databases, I use{' '}
						<strong>PostgreSQL</strong>, but lately, I have been learning some
						No-SQL with <strong>Firebase</strong>.
					</p>
					<p>
						Aside from that, I also have experience with{' '}
						<strong>Canva and Figma</strong>.
					</p>
					<p>
						My plans at the moment are to expand my knowledge of the
						above-mentioned tools, but also explore new languages and
						frameworks. Currently, I am learning <strong>Python</strong> as I
						would like to know about its versatility and its use in data
						analysis. Additionally, I would like to recover my confidence with{' '}
						<strong>C, C++, and C#</strong>. On top of that, I would like to
						complement my interest in technology and coding with an
						understanding of <strong>cybersecurity</strong>.
					</p>
				</div>
				<div className="imageGrids">
					<div className="mapping">
						<h3>My Skill Set:</h3>
						<div className="icons">
							{SKILLS.map((s) => (
								<section
									className="skill"
									key={s.name}
								>
									<img
										src={s.path}
										alt={s.name}
									/>
								</section>
							))}
						</div>
					</div>
					<div className="mapping">
						<h3>Currently Learning:</h3>
						<div className="icons">
							{LEARNING.map((s) => (
								<section
									className="skill"
									key={s.name}
								>
									<img
										src={s.path}
										alt={s.name}
									/>
								</section>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
