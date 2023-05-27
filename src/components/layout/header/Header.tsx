import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FormattedMessage } from "react-intl";
import scss from "./Header.module.scss";
import { LangIcon, ArrowIcon, ArrowUpRightIcon } from "@/components/svgs";
import AnimatedNumbers from "@/components/framer-motion/AnimatedNumbers";

// PermanentMarker

import { IsOpenProps } from "@/components/layout/Layout";

interface HeaderProps extends IsOpenProps {}

interface linksProps {
	to: string;
	href: string;
	label: any;
	spy: boolean;
	smooth: boolean;
	offset: number;
	duration: number;
}

const Header: FC<HeaderProps> = (props) => {
	const [headerScroll, setHeaderScroll] = useState<boolean>(false);
	const { locales, locale: activeLocale, pathname }: any = useRouter();

	// ! Scrolling Scroll
	useEffect(() => {
		const changeBackground = () => {
			if (window.scrollY >= 10) {
				setHeaderScroll(true);
			} else {
				setHeaderScroll(false);
			}
		};

		changeBackground();
		window.addEventListener("scroll", changeBackground);

		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	// ! Link Scroll
	const offsetScroll = -30;
	const durationScroll = 500;

	const links: linksProps[] = [
		{
			label: <FormattedMessage id="page.header.home" />,
			to: "/",
			href: "#home",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll
		},
		{
			label: <FormattedMessage id="page.header.about" />,
			to: "about",
			href: "#about",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll
		},
		{
			label: <FormattedMessage id="page.header.project" />,
			to: "project",
			href: "#project",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll
		},
		{
			label: <FormattedMessage id="page.header.contact" />,
			to: "contact",
			href: "#contact",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll
		}
	];

	const handleScroll = () => {
		setTimeout(() => {
			window.scrollBy(0, 1);
		}, 570);
	};

	return (
		<div>
			<header className={scss.header}>
				<div
					className={
						headerScroll
							? `${scss.headerScroll} ${scss.active}`
							: `${scss.headerScroll}`
					}
				>
					<div className="container">
						<div className={scss.content}>
							{/* ! header menu */}
							<div className={scss.logo}>
								<ScrollLink
									to="/"
									spy={true}
									href="#home"
									smooth={true}
									offset={offsetScroll}
									duration={durationScroll}
									onClick={() => {
										props.setIsOpen(false);
										props.setIsOpenDropdown(false);
										props.setIsOpenDropdownLanguage(false);
										handleScroll();
									}}
								>
									<h1 className={scss.logo__bg}>
										Elcho
										<span>
											<AnimatedNumbers value={911} />
										</span>
									</h1>
								</ScrollLink>
							</div>
							<div className={scss.nav__menu}>
								<div className={scss.left}>
									<div className={scss.links}>
										{links.map((link, index) => (
											<ScrollLink
												key={index + 1}
												to={link.to}
												href={link.href}
												spy={link.spy}
												smooth={link.smooth}
												offset={link.offset}
												duration={link.duration}
												className={scss.link}
												activeClass={scss.active}
												onClick={() => {
													handleScroll();
												}}
											>
												{link.label}
											</ScrollLink>
										))}
									</div>
								</div>

								<div className={scss.right}>
									{/* ! switch lang */}
									<div className={scss.dropdown__language__menu__for__desktop}>
										<div className={scss.icon}>
											<span>
												<LangIcon
													className={`${scss.arrow__icon} ${scss.arrow__icon__V1}`}
												/>
												<ArrowIcon
													className={`${scss.arrow__icon} ${scss.arrow__icon__V2}`}
												/>
											</span>
										</div>

										<div className={scss.dropdown__content}>
											{[...locales].map((locale, index) => (
												<Link
													key={index + 1}
													className={
														locale === activeLocale
															? `${scss.button} ${scss.active}`
															: `${scss.button}`
													}
													href={pathname}
													locale={locale}
												>
													{locale}
												</Link>
											))}
										</div>
									</div>

									{/* ! resume */}
									<div className={scss.resume}>
										<a
											className={scss.button}
											href="/resume-elcho911.pdf"
											target="_blank"
										>
											Resume
											<ArrowUpRightIcon />
										</a>
									</div>
								</div>
							</div>

							{/* ! burger menu */}
							<div
								className={
									props.isOpen
										? `${scss.nav__burger__menu} ${scss.show}`
										: `${scss.nav__burger__menu}`
								}
							>
								{links.map((link, index) => (
									<ScrollLink
										key={index + 1}
										to={link.to}
										href={link.href}
										spy={link.spy}
										smooth={link.smooth}
										offset={link.offset}
										duration={link.duration}
										className={scss.link}
										activeClass={scss.active}
										onClick={() => {
											props.setIsOpen(false);
											props.setIsOpenDropdown(false);
											props.setIsOpenDropdownLanguage(false);
											handleScroll();
										}}
									>
										{link.label}
									</ScrollLink>
								))}

								{/* ! switch lang */}
								<div
									className={
										props.isOpenDropdownLanguage
											? `${scss.dropdown__language__menu__for__mobile} ${scss.open}`
											: `${scss.dropdown__language__menu__for__mobile}`
									}
									onClick={() => {
										props.setIsOpenDropdownLanguage(
											!props.isOpenDropdownLanguage
										);
									}}
								>
									<span>
										<FormattedMessage id="page.header.switch.lang" />
										<LangIcon
											className={`${scss.arrow__icon} ${scss.arrow__icon__V1}`}
										/>
										<ArrowIcon
											className={`${scss.arrow__icon} ${scss.arrow__icon__V2}`}
										/>
									</span>

									<div
										className={
											props.isOpenDropdownLanguage
												? `${scss.dropdown__content} ${scss.open}`
												: `${scss.dropdown__content} `
										}
										onClick={(event) => {
											event.stopPropagation();
											props.setIsOpen(false);
											props.setIsOpenDropdownLanguage(true);
										}}
									>
										{[...locales].map((locale, index) => (
											<Link
												key={index + 1}
												className={
													locale === activeLocale
														? `${scss.button} ${scss.active}`
														: `${scss.button}`
												}
												href={pathname}
												locale={locale}
											>
												{locale}
											</Link>
										))}
									</div>
								</div>

								{/* ! resume */}
								<div className={scss.resume}>
									<a
										className={scss.button}
										href="/resume-elcho911.pdf"
										target="_blank"
									>
										Resume
										<ArrowUpRightIcon />
									</a>
								</div>
							</div>

							{/*<div className={scss.burger__button}>*/}
							{/*	<div*/}
							{/*		className={*/}
							{/*			props.isOpen*/}
							{/*				? `${scss.burger__icon} ${scss.open}`*/}
							{/*				: `${scss.burger__icon} `*/}
							{/*		}*/}
							{/*		onClick={() => props.setIsOpen(!props.isOpen)}*/}
							{/*	>*/}
							{/*		<span />*/}
							{/*	</div>*/}
							{/*</div>*/}

							<div className={scss.burger__button}>
								<label>
									<input
										type="checkbox"
										checked={props.isOpen}
										onChange={() => props.setIsOpen(!props.isOpen)}
									/>
									<span></span>
									<span></span>
									<span></span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};
export default Header;
