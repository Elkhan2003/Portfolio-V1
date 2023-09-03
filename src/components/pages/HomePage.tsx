import React, { FC, useEffect, useState } from "react";
import scss from "@/components/pages/Style.module.scss";
import { TypingTitle, TypingText } from "@/components/typing-text/Typing";
import { FormattedMessage } from "react-intl";
import { GithubIcon, LinkedinIcon } from "@/components/svgs";
import Image, { StaticImageData } from "next/image";
import * as TechIcons from "@/assets/tech-icons";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

interface techIconsTypes {
	icon: StaticImageData;
	name: string;
}

const HomePage: FC = () => {
	const [isTiltActive, setIsTiltActive] = useState<boolean>(true);
	const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

	useEffect(() => {
		if (window.innerWidth < 500) {
			setIsTiltActive(false);
		}
	}, []);

	const tech_icons: techIconsTypes[] = [
		{ icon: TechIcons.linux_icon, name: "Linux" },
		{ icon: TechIcons.html_icon, name: "HTML" },
		{ icon: TechIcons.css_icon, name: "CSS" },
		{ icon: TechIcons.java_script_icon, name: "JavaScript" },
		{ icon: TechIcons.type_script_icon, name: "TypeScript" },
		{ icon: TechIcons.react_icon, name: "React" },
		{ icon: TechIcons.redux_icon, name: "Redux" },
		{ icon: TechIcons.vite_icon, name: "Vite" },
		{ icon: TechIcons.next_icon, name: "Next.js" },
		{ icon: TechIcons.scss_icon, name: "SCSS" },
		{ icon: TechIcons.node_icon, name: "Node.js" },
		{ icon: TechIcons.express_icon, name: "Express" },
		{ icon: TechIcons.fastify_icon, name: "Fastify" },
		{ icon: TechIcons.prisma_icon, name: "Prisma" },
		{ icon: TechIcons.supabase_icon, name: "Supabase" },
		{ icon: TechIcons.my_sql_icon, name: "MySQL" },
		{ icon: TechIcons.postgresql_icon, name: "PostgreSQL" },
		{ icon: TechIcons.docker_icon, name: "Docker" },
		{ icon: TechIcons.git_icon, name: "Git" }
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
				viewport={{ once: true }}
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
									<TypingTitle />
								</motion.h1>
								<motion.p
									custom={3}
									variants={animationText}
									className={`${scss.text__z__index} ${scss.my__self}`}
								>
									<TypingText />
								</motion.p>
								<div className={`${scss.text__z__index} ${scss.my__icons}`}>
									<motion.a
										custom={11}
										variants={animationIcons}
										className={scss.icon}
										href="https://www.linkedin.com/in/elcho"
										target="_blank"
										aria-label="Linkedin"
									>
										<LinkedinIcon />
									</motion.a>
									<motion.a
										custom={12}
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
							<div className={`${scss.text__z__index} ${scss.right}`}>
								<Tilt
									tiltEnable={isTiltActive}
									tiltMaxAngleX={10}
									tiltMaxAngleY={10}
								>
									<motion.div
										custom={1}
										variants={animationImage}
										className={`${scss.shape}`}
									></motion.div>
								</Tilt>
							</div>
						</div>

						{/*	! bottom */}
						<div className={scss.bottom}>
							<div className={`${scss.my__skills}`}>
								<motion.p
									custom={5}
									variants={animationText}
									className={`${scss.text__z__index}`}
								>
									<FormattedMessage id="page.home.tech_stack" />
								</motion.p>
								<div className={scss.logos}>
									{tech_icons.map((item, index) => (
										<motion.div
											custom={index + 16}
											variants={animationIcons}
											key={index + 1}
											className={`${scss.text__z__index} ${scss.icon}`}
											onMouseEnter={() => setActiveTooltip(item.name)}
											onMouseLeave={() => setActiveTooltip(null)}
										>
											<Image
												priority={true}
												quality={25}
												loading="eager"
												className={scss.icon}
												src={item.icon}
												alt={item.name}
											/>
											{activeTooltip === item.name && (
												<div className={scss.tech__title}>{item.name}</div>
											)}
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
