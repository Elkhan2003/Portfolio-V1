import React, { FC } from "react";
import scss from "./Style.module.scss";
import Image from "next/image";
import project_1 from "@/assets/projects/coindom.png";
import devx_magazine from "@/assets/projects/devx-magazine.png";
import ortodont_group from "@/assets/projects/ortodont-group.png";
import my_diploma from "@/assets/projects/my-diploma.png";
import todo_list from "@/assets/projects/todo-list.png";
import { ArrowUpRightIcon, GithubIcon } from "@/components/svgs";

interface projectsTypes {
	title: string;
	description: string;
	stack: Array<string>;
	codeLink: string;
	demoLink: string;
	image: any;
}

const ProjectPage: FC = () => {
	const projects: projectsTypes[] = [
		{
			title: "Ortodont Group 🪙",
			description:
				"Сайт Ortodont Group является сайтом клиники стоматологии Orthodont Group. На сайте можно найти информацию о клинике, услугах, которые она предоставляет, а также записаться на прием.",
			stack: ["NextJS", "TypeScript", "SCSS"],
			codeLink: "https://github.com/Elkhan2003/Next-Dentist",
			demoLink: "https://next-dentist911.vercel.app/",
			image: ortodont_group
		},
		{
			title: "DevX Magazine 🪙",
			description:
				"DevX Magazine - журнальный сайт с возможностью онлайн-отметок людей. Используя Firebase, вы можете быстро копировать отмеченных пользователей в один клик на Copy Users 💎 и отправлять отчеты через WhatsApp и другие платформы.",
			stack: ["React", "SCSS", "Firebase"],
			codeLink: "https://github.com/Elkhan2003/DevX-Magazine-Private",
			demoLink: "https://devx911.netlify.app/",
			image: devx_magazine
		},
		{
			title: "Diploma project 🪙",
			description:
				"Этот сайт на React разработан в рамках дипломного проекта Иссык-Кульского государственного университета имени К. Тыныстанова и является моим первым на структуре React.",
			stack: ["React", "SCSS", "Bootstrap"],
			codeLink: "https://github.com/Elkhan2003/Elcho911-Diploma",
			demoLink: "https://elcho911-diploma.netlify.app/",
			image: my_diploma
		},
		{
			title: "ToDo List 🪙",
			description:
				"Сайт ToDo List - это веб-приложение для составления списка задач. Оно было создано с использованием Node.JS и React. Приложение позволяет добавлять, удалять, изменять и отмечать задачи как выполненные.",
			stack: ["React", "SCSS", "MongoDB"],
			codeLink: "https://github.com/Elkhan2003/MongoDB-ToDoList",
			demoLink: "https://todo-mongo911.netlify.app/",
			image: todo_list
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
							<h4>Projects</h4>
							<h3>Each project is a unique piece of development 🧩</h3>
						</div>

						{projects.map((project, index) => (
							<div
								className={`${scss.card} ${
									index % 2 !== 0 ? scss.row__reverse : ""
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
											alt={"project"}
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
