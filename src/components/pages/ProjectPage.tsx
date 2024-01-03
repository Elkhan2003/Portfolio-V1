import React, { FC } from 'react';
import scss from './Style.module.scss';
import Image from 'next/image';
import eco_movie from '@/assets/projects/eco-movie.png';
import wedevx_selenium from '@/assets/projects/wedevx-selenium.png';
import ortodont_group from '@/assets/projects/ortodont-group.png';
import amo_crm from '@/assets/projects/amo-crm.png';
import telegram_sms_bot from '@/assets/projects/telegram-sms-bot.png';
import devx_magazine from '@/assets/projects/devx-magazine.png';
import devx_iksu from '@/assets/projects/devx-iksu.png';
import my_diploma from '@/assets/projects/my-diploma.png';
import mogo from '@/assets/projects/mogo.png';
import devx_little from '@/assets/projects/devx-little.png';
import ojjo from '@/assets/projects/ojjo.png';
import css_animation from '@/assets/projects/css-animation.png';
import todo_list from '@/assets/projects/todo-list.png';
import { ArrowUpRightIcon, GithubIcon } from '@/components/svgs';
import { FormattedMessage } from 'react-intl';

interface projectsTypes {
	title: string;
	description: any;
	stack: Array<string>;
	codeLink: string;
	demoLink: string;
	image: any;
}

const ProjectPage: FC = () => {
	const projects: projectsTypes[] = [
		{
			title: 'Eco Movie 🐬',
			description: <FormattedMessage id="page.project.text.eco_movie" />,
			stack: ['NextJS', 'TypeScript', 'ReduxToolkit', 'RestAPI'],
			codeLink: 'https://github.com/Elkhan2003/eco-movie',
			demoLink: 'https://ecomovie.life/',
			image: eco_movie
		},
		{
			title: 'WeDevX Selenium 🐬',
			description: <FormattedMessage id="page.project.text.wedevx_selenium" />,
			stack: ['NextJS', 'TypeScript', 'Material UI'],
			codeLink: 'https://github.com/Elkhan2003/Selenium',
			demoLink: 'https://demo-project.wedevx.co/',
			image: wedevx_selenium
		},
		{
			title: 'Ortodont Group 🪙',
			description: <FormattedMessage id="page.project.text.ortodont_group" />,
			stack: ['NextJS', 'TypeScript', 'SCSS', 'RestAPI'],
			codeLink: 'https://github.com/Elkhan2003/Next-Dentist',
			demoLink: 'https://next-dentist911.vercel.app/',
			image: ortodont_group
		},
		{
			title: 'AmoCRM 🐬',
			description: <FormattedMessage id="page.project.text.amo_crm" />,
			stack: [
				'Fastify',
				'TypeScript',
				'Supabase',
				'Prisma',
				'AmoCRM',
				'RestAPI'
			],
			codeLink: 'https://github.com/Elkhan2003/AmoCRM',
			demoLink: 'https://rose-uninterested-crane.cyclic.cloud/',
			image: amo_crm
		},
		{
			title: 'Telegram SMS bot 🐬',
			description: <FormattedMessage id="page.project.text.telegram_sms_bot" />,
			stack: ['Express', 'TypeScript', 'TelegramBot', 'RestAPI'],
			codeLink: 'https://github.com/Elkhan2003/telegram-sms-bot',
			demoLink:
				'https://github.com/Elkhan2003/telegram-sms-bot/blob/main/README.md',
			image: telegram_sms_bot
		},
		{
			title: 'WeDevX Magazine 🐬',
			description: <FormattedMessage id="page.project.text.devx_magazine" />,
			stack: ['React', 'SCSS', 'Firebase', 'RestAPI'],
			codeLink: 'https://github.com/Elkhan2003/DevX-Magazine-Private',
			demoLink: 'https://devx911.netlify.app/',
			image: devx_magazine
		},
		{
			title: 'Alpha version | DevX IKSU 🐬',
			description: <FormattedMessage id="page.project.text.devx_iksu" />,
			stack: ['React', 'TypeScript', 'SCSS', 'Firebase'],
			codeLink: 'https://github.com/DevX-Karakol-911/DevX-Karakol-beta',
			demoLink: 'https://devx-kg.netlify.app/',
			image: devx_iksu
		},
		{
			title: 'Diploma project 🪙',
			description: <FormattedMessage id="page.project.text.diploma_project" />,
			stack: ['React', 'SCSS', 'Bootstrap'],
			codeLink: 'https://github.com/Elkhan2003/Elcho911-Diploma',
			demoLink: 'https://elcho911-diploma.netlify.app/',
			image: my_diploma
		},
		// {
		// 	title: "ToDo List 🪙",
		// 	description: <FormattedMessage id="page.project.text.todo_list" />,
		// 	stack: ["React", "SCSS", "NodeJS", "MongoDB"],
		// 	codeLink: "https://github.com/Elkhan2003/MongoDB-ToDoList",
		// 	demoLink: "https://todo-mongo911.netlify.app/",
		// 	image: todo_list
		// },
		{
			title: '2020 | Mogo 🤫',
			description: <FormattedMessage id="page.project.text.intern" />,
			stack: ['HTML', 'SCSS', 'JavaScript'],
			codeLink: 'https://github.com/Elkhan2003/Mogo',
			demoLink: 'https://elkhan2003.github.io/Mogo/',
			image: mogo
		},
		{
			title: '2020 |  First little Site 🤫',
			description: <FormattedMessage id="page.project.text.intern" />,
			stack: ['HTML', 'SCSS', 'JavaScript'],
			codeLink: 'https://github.com/Elkhan2003/DevX',
			demoLink: 'https://elkhan2003.github.io/DevX/',
			image: devx_little
		},
		// {
		// 	title: "2020 |  OJJO 🤫",
		// 	description: <FormattedMessage id="page.project.text.intern" />,
		// 	stack: ["HTML", "SCSS"],
		// 	codeLink: "https://github.com/Elkhan2003/OJJO",
		// 	demoLink: "https://elkhan2003.github.io/OJJO/",
		// 	image: ojjo
		// },
		{
			title: '2020 |  CSS Animation 🤫',
			description: <FormattedMessage id="page.project.text.intern" />,
			stack: ['HTML', 'CSS'],
			codeLink: 'https://github.com/Elkhan2003/css-animation',
			demoLink: 'https://elkhan2003.github.io/css-animation/',
			image: css_animation
		}
	];

	return (
		<>
			<div
				id="project"
				className={`${scss.text__z__index} ${scss.project__page}`}
			>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.title}>
							<h1>
								<FormattedMessage id="page.project.title_1" />
							</h1>
							<h2>
								<FormattedMessage id="page.project.title_2" />
							</h2>
						</div>

						{projects.map((project, index) => (
							<div
								className={`${scss.card} ${
									index % 2 !== 0 ? scss.row__reverse : ''
								}`}
								key={index + 1}
							>
								<div className={scss.pro__text}>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<div className={scss.stack}>
										{project.stack.map((item, index) => (
											<p key={index + 1}>{item}</p>
										))}
									</div>
									<div className={scss.links}>
										<a
											className={`${scss.code}`}
											href={project.codeLink}
											target="_blank"
										>
											Code
											<GithubIcon />
										</a>
										<a
											className={`${scss.demo}`}
											href={project.demoLink}
											target="_blank"
										>
											Live Demo
											<ArrowUpRightIcon />
										</a>
									</div>
								</div>
								<div className={`${scss.pro__img}`}>
									<a href={project.demoLink} target="_blank">
										<Image
											priority={true}
											quality={25}
											loading="eager"
											src={project.image}
											alt={'project'}
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
