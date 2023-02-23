import styles from "./ProjectSection.module.css";

const ProjectSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.projectTitle}>Projects</h2>
			<div className={styles.projectsContainer}></div>
		</div>
	);
};

export default ProjectSection;
