import React, { FC } from "react";
import scss from "./Style.module.scss";
import Image from "next/image";
import project_1 from "@/assets/projects/coindom.png";

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
						<div className={scss.card}>
							<div className={scss.pro__text}>
								<h3>COINDOM 🪙</h3>
								<p>
									Coindom is a crypto app that allows users to search for
									information about various cryptocurrencies in real-time.
								</p>
								<div className={scss.stack}>
									<p>React</p>
									<p>SCSS</p>
								</div>
							</div>
							<div className={scss.pro__img}>
								<a href="#" target="_blank">
									{/*<Image src={project_1} alt={"project"} />*/}
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
