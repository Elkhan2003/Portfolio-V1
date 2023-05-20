import React, { FC } from "react";
import scss from "./Footer.module.scss";
import { GithubIcon, LinkedinIcon } from "@/components/svgs";

const Footer: FC = () => {
	return (
		<>
			<div className={`${scss.footer__page} ${scss.text__z__index}`}>
				<div className="container">
					<div className={scss.content}>
						<h4>Copyright © 2023. All rights are reserved</h4>
						<h4 className={scss.center__text}>
							Built with<span className={scss.heart}>♡</span>by
							<span>
								<a href="https://nextjs.org/" target="_blank">
									NextJS
								</a>
							</span>
						</h4>
						<div className={`${scss.my__icons}`}>
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
				</div>
			</div>
		</>
	);
};
export default Footer;
