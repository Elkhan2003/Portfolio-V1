import Head from "next/head";
import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import SpringText from "@/components/spring-text/SpringText";
import { GithubIcon, LinkedinIcon } from "@/components/svgs";
import Image from "next/image";
import html_icon from "@/assets/tech-icons/html-icon.png";
import css_icon from "@/assets/tech-icons/css-icon.png";
import java_script_icon from "@/assets/tech-icons/java-script-icon.png";
import type_script_icon from "@/assets/tech-icons/type-script-icon.png";
import react_icon from "@/assets/tech-icons/react-icon.png";
import vite_icon from "@/assets/tech-icons/vite-icon.png";
import next_icon from "@/assets/tech-icons/next-js-icon.png";
import node_icon from "@/assets/tech-icons/node-js-icon.png";
import scss_icon from "@/assets/tech-icons/scss-icon.png";

const HomePage: FC = () => {
	const tech_icons = [
		{
			icon: html_icon
		},
		{
			icon: css_icon
		},
		{
			icon: java_script_icon
		},
		{
			icon: type_script_icon
		},
		{
			icon: react_icon
		},
		{
			icon: vite_icon
		},
		{
			icon: next_icon
		},
		{
			icon: node_icon
		},
		{
			icon: scss_icon
		}
	];

	return (
		<>
			<Head>
				<title>Elcho911</title>
			</Head>
			<div id="/" className={scss.home__page}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.top}>
							<div className={scss.left}>
								<h1 className={`${scss.text__z__index} ${scss.my__name}`}>
									Hi, I'm Elkhan <span>(Elcho)</span>
								</h1>
								<h1 className={`${scss.text__z__index} ${scss.my__experience}`}>
									I AM A&nbsp;
									<SpringText />
								</h1>
								<p className={`${scss.text__z__index} ${scss.my__self}`}>
									As a skilled full-stack developer, I am dedicated to turning
									ideas into innovative web applications. Explore my latest
									projects and articles, showcasing my expertise in React.js and
									web development. 📍
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
								<p className={`${scss.text__z__index}`}>Tech Stack</p>
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
												src={item.icon}
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
