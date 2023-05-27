import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import SpringText from "@/components/spring-text/SpringText";
import { GithubIcon, LinkedinIcon } from "@/components/svgs";
import Image, { StaticImageData } from "next/image";
import * as TechIcons from "@/assets/tech-icons";
import { FormattedMessage } from "react-intl";

const HomePage: FC = () => {
	const tech_icons: StaticImageData[] = [
		TechIcons.html_icon,
		TechIcons.css_icon,
		TechIcons.java_script_icon,
		TechIcons.type_script_icon,
		TechIcons.react_icon,
		TechIcons.vite_icon,
		TechIcons.next_icon,
		TechIcons.node_icon,
		TechIcons.scss_icon
	];

	return (
		<>
			<div id="/" className={scss.home__page}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.top}>
							<div className={scss.left}>
								<h1 className={`${scss.text__z__index} ${scss.my__name}`}>
									<FormattedMessage
										id="page.home.my_name"
										values={{ span: (chunks) => <span>{chunks}</span> }}
									/>
								</h1>
								<h1 className={`${scss.text__z__index} ${scss.my__experience}`}>
									<FormattedMessage id="page.home.my__experience" />
									&nbsp;
									<SpringText />
								</h1>
								<p className={`${scss.text__z__index} ${scss.my__self}`}>
									<FormattedMessage id="page.home.my__self" />
								</p>
								<div className={`${scss.text__z__index} ${scss.my__icons}`}>
									<a
										className={scss.icon}
										href="https://github.com/Elkhan2003"
										target="_blank"
										aria-label="Linkedin"
									>
										<LinkedinIcon />
									</a>
									<a
										className={scss.icon}
										href="https://github.com/Elkhan2003"
										target="_blank"
										aria-label="GitHub"
									>
										<GithubIcon />
									</a>
								</div>
							</div>
							<div className={scss.right}>
								<div className={`${scss.shape}`}></div>
							</div>
						</div>

						{/*	! bottom */}
						<div className={scss.bottom}>
							<div className={`${scss.my__skills}`}>
								<p className={`${scss.text__z__index}`}>
									<FormattedMessage id="page.home.tech_stack" />
								</p>
								<div className={scss.logos}>
									{tech_icons.map((item, index) => (
										<div
											key={index + 1}
											className={`${scss.text__z__index} ${scss.icon}`}
										>
											<Image
												priority={true}
												quality={25}
												loading="eager"
												className={scss.icon}
												src={item}
												alt={"icon"}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
