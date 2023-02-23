import styles from "./AboutSection.module.css";

const AboutSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.aboutTitle}>About</h2>
			<div className={styles.aboutContainer}></div>
		</div>
	);
};

export default AboutSection;
