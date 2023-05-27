import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import SpringText from "@/components/spring-text/SpringText";
import { FormattedMessage } from "react-intl";
import { GithubIcon, LinkedinIcon } from "@/components/svgs";
import Image, { StaticImageData } from "next/image";
import * as TechIcons from "@/assets/tech-icons";
import { motion } from "framer-motion";

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

	const animationText = {
		hidden: {
			x: -100,
			opacity: 0
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3, else: "easyOut", duration: 0.5 }
		})
	};

	const animationIcons = {
		hidden: {
			y: 100,
			opacity: 0
		},
		visible: (custom: number) => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.1, else: "easyOut", duration: 0.4 }
		})
	};

	const animationImage = {
		hidden: {
			y: -70,
			opacity: 0
		},
		visible: (custom: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				y: {
					delay: custom * 0.2,
					ease: "easeOut",
					duration: 0.2
				},
				opacity: {
					delay: custom * 0.3,
					ease: "easeOut",
					duration: 1
				}
			}
		})
	};

	return (
		<>
			<motion.div
				initial="hidden"
				whileInView="visible"
				id="/"
				className={scss.home__page}
			>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.top}>
							<div className={scss.left}>
								<motion.h1
									custom={1}
									variants={animationText}
									className={`${scss.text__z__index} ${scss.my__name}`}
								>
									<FormattedMessage
										id="page.home.my_name"
										values={{ span: (chunks) => <span>{chunks}</span> }}
									/>
								</motion.h1>
								<motion.h1
									custom={2}
									variants={animationText}
									className={`${scss.text__z__index} ${scss.my__experience}`}
								>
									<FormattedMessage id="page.home.my__experience" />
									&nbsp;
									<SpringText />
								</motion.h1>
								<motion.p
									custom={3}
									variants={animationText}
									className={`${scss.text__z__index} ${scss.my__self}`}
								>
									<FormattedMessage id="page.home.my__self" />
								</motion.p>
								<div className={`${scss.text__z__index} ${scss.my__icons}`}>
									<motion.a
										custom={4}
										variants={animationIcons}
										className={scss.icon}
										href="https://github.com/Elkhan2003"
										target="_blank"
										aria-label="Linkedin"
									>
										<LinkedinIcon />
									</motion.a>
									<motion.a
										custom={6}
										variants={animationIcons}
										className={scss.icon}
										href="https://github.com/Elkhan2003"
										target="_blank"
										aria-label="GitHub"
									>
										<GithubIcon />
									</motion.a>
								</div>
							</div>
							<div className={scss.right}>
								<motion.div
									custom={1}
									variants={animationImage}
									className={`${scss.shape}`}
								></motion.div>
							</div>
						</div>

						{/*	! bottom */}
						<div className={scss.bottom}>
							<div className={`${scss.my__skills}`}>
								<motion.p
									custom={1}
									variants={animationText}
									className={`${scss.text__z__index}`}
								>
									<FormattedMessage id="page.home.tech_stack" />
								</motion.p>
								<div className={scss.logos}>
									{tech_icons.map((item, index) => (
										<motion.div
											custom={index + 1}
											variants={animationIcons}
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
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};
export default HomePage;
