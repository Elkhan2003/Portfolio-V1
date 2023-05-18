import React, { FC } from "react";
import scss from "./Style.module.scss";
import Image from "next/image";
import project_1 from "@/assets/projects/coindom.png";
import { ArrowUpRightIcon, GithubIcon } from "@/components/svgs";

interface projectsTypes {
	title: string;
	description: string;
	stack: Array<string>;
	codeLink: string;
	demoLink: string;
}

const ProjectPage: FC = () => {
	const projects: projectsTypes[] = [
		{
			title: "COINDOM 🪙",
			description:
				"Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
			stack: ["React", "SCSS"],
			codeLink: "#",
			demoLink: "#"
		},
		{
			title: "COINDOM 🪙",
			description:
				"Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
			stack: ["React", "SCSS"],
			codeLink: "#",
			demoLink: "#"
		},
		{
			title: "COINDOM 🪙",
			description:
				"Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
			stack: ["React", "SCSS"],
			codeLink: "#",
			demoLink: "#"
		}
	];

	return (
		<>
			<div id="project" className={scss.project__page}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.title}>
							<h4 className={`${scss.text__z__index}`}>Portfolio</h4>
							<h3 className={`${scss.text__z__index}`}>
								Each project is a unique piece of development 🧩
							</h3>
						</div>

						{projects.map((project, index) => (
							<div
								className={`${scss.card} ${
									index === 1 ? scss.row__reverse : ""
								}`}
								key={index + 1}
							>
								<div className={scss.pro__text}>
									<h3 className={`${scss.text__z__index}`}>{project.title}</h3>
									<p className={`${scss.text__z__index}`}>
										{project.description}
									</p>
									<div className={scss.stack}>
										{project.stack.map((item, index) => (
											<p className={`${scss.text__z__index}`} key={index + 1}>
												{item}
											</p>
										))}
									</div>
									<div className={scss.links}>
										<a
											className={`${scss.text__z__index} ${scss.code}`}
											href={project.codeLink}
											target="_blank"
										>
											Code
											<GithubIcon />
										</a>
										<a
											className={`${scss.text__z__index} ${scss.demo}`}
											href={project.demoLink}
											target="_blank"
										>
											Live Demo
											<ArrowUpRightIcon />
										</a>
									</div>
								</div>
								<div className={`${scss.text__z__index} ${scss.pro__img}`}>
									<a href="#" target="_blank">
										<Image
											priority={true}
											quality={25}
											loading="eager"
											src={project_1}
											alt={"project"}
										/>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
