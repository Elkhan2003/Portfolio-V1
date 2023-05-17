import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import Image from "next/image";
import about_pic from "@/assets/about-pic.png";
import spiner_pic from "@/assets/spiner-pic.png";

const AboutPage: FC = () => {
	return (
		<>
			<div id="about" className={scss.about__page}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.left}>
							<Image
								priority={true}
								quality={25}
								loading="eager"
								className={`${scss.img}`}
								src={about_pic}
								alt={"labtop"}
							/>
							<span>
								<Image
									priority={true}
									quality={25}
									loading="eager"
									className={`${scss.icon}`}
									src={spiner_pic}
									alt={"labtop"}
								/>
							</span>
						</div>
						<div className={scss.right}>
							<h4 className={`${scss.text__z__index}`}>about me</h4>
							<h3 className={`${scss.text__z__index}`}>
								A dedicated Front-end Developer based in DevX, Kyrgyzstan 📍
							</h3>
							<p className={`${scss.text__z__index}`}>
								As a Middle Front-End Developer, I possess an impressive arsenal
								of skills in HTML, CSS, JavaScript, TypeScript, React, Vite,
								Next JS, Node JS and SCSS. I excel in designing and maintaining
								responsive websites that offer a smooth user experience. My
								expertise lies in crafting dynamic, engaging interfaces through
								writing clean and optimized code and utilizing cutting-edge
								development tools and techniques. I am also a team player who
								thrives in collaborating with cross-functional teams to produce
								outstanding web applications.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutPage;
