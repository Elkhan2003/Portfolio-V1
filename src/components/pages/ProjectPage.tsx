import React, { FC } from "react";
import scss from "./Style.module.scss";
import Image from "next/image";
import project_1 from "@/assets/projects/coindom.png";
import { ArrowUpRightIcon, GithubIcon } from "@/components/svgs";

const ProjectPage: FC = () => {
	return (
		<>
			<div id="project" className={scss.project__page}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.title}>
							<h4 className={`${scss.text__z__index}`}>PORTFOLIO</h4>
							<h3 className={`${scss.text__z__index}`}>
								Each project is a unique piece of development 🧩
							</h3>
						</div>

						{/* ! card 1 */}
						<div className={scss.card}>
							<div className={scss.pro__text}>
								<h3 className={`${scss.text__z__index}`}>COINDOM 🪙</h3>
								<p className={`${scss.text__z__index}`}>
									Coindom is a crypto app that allows users to search for
									information about various cryptocurrencies in real-time.
								</p>
								<div className={scss.stack}>
									<p className={`${scss.text__z__index}`}>React</p>
									<p className={`${scss.text__z__index}`}>SCSS</p>
								</div>
								<div className={scss.links}>
									<a
										className={`${scss.text__z__index} ${scss.code}`}
										href="#"
										target="_blank"
									>
										Code
										<GithubIcon />
									</a>
									<a
										className={`${scss.text__z__index} ${scss.demo}`}
										href="#"
										target="_blank"
									>
										Live Demo
										<ArrowUpRightIcon />
									</a>
								</div>
							</div>
							<div className={`${scss.text__z__index} ${scss.pro__img}`}>
								<a href="#" target="_blank">
									<Image src={project_1} alt={"project"} />
								</a>
							</div>
						</div>

						{/* ! card 2 */}
						<div className={`${scss.card} ${scss.row__reverse}`}>
							<div className={scss.pro__text}>
								<h3 className={`${scss.text__z__index}`}>COINDOM 🪙</h3>
								<p className={`${scss.text__z__index}`}>
									Coindom is a crypto app that allows users to search for
									information about various cryptocurrencies in real-time.
								</p>
								<div className={scss.stack}>
									<p className={`${scss.text__z__index}`}>React</p>
									<p className={`${scss.text__z__index}`}>SCSS</p>
								</div>
								<div className={scss.links}>
									<a
										className={`${scss.text__z__index} ${scss.code}`}
										href="#"
										target="_blank"
									>
										Code
										<GithubIcon />
									</a>
									<a
										className={`${scss.text__z__index} ${scss.demo}`}
										href="#"
										target="_blank"
									>
										Live Demo
										<ArrowUpRightIcon />
									</a>
								</div>
							</div>
							<div className={`${scss.text__z__index} ${scss.pro__img}`}>
								<a href="#" target="_blank">
									<Image src={project_1} alt={"project"} />
								</a>
							</div>
						</div>

						{/* ! card 3 */}
						<div className={scss.card}>
							<div className={scss.pro__text}>
								<h3 className={`${scss.text__z__index}`}>COINDOM 🪙</h3>
								<p className={`${scss.text__z__index}`}>
									Coindom is a crypto app that allows users to search for
									information about various cryptocurrencies in real-time.
								</p>
								<div className={scss.stack}>
									<p className={`${scss.text__z__index}`}>React</p>
									<p className={`${scss.text__z__index}`}>SCSS</p>
								</div>
								<div className={scss.links}>
									<a
										className={`${scss.text__z__index} ${scss.code}`}
										href="#"
										target="_blank"
									>
										Code
										<GithubIcon />
									</a>
									<a
										className={`${scss.text__z__index} ${scss.demo}`}
										href="#"
										target="_blank"
									>
										Live Demo
										<ArrowUpRightIcon />
									</a>
								</div>
							</div>
							<div className={`${scss.text__z__index} ${scss.pro__img}`}>
								<a href="#" target="_blank">
									<Image src={project_1} alt={"project"} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ProjectPage;
