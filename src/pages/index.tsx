import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ProjectPage from "@/components/pages/ProjectPage";

const Index: FC = () => {
	return (
		<>
			<Layout>
				<HomePage />
				<AboutPage />
				<ProjectPage />
			</Layout>
		</>
	);
};
export default Index;
