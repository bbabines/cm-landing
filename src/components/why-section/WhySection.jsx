import styles from "./WhySection.module.css";

const WhySection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.projectTitle}>Why?</h2>
			<div className={styles.detailsContainer}>
				<p className={styles.whyDetails}>
					Info about why we feel this is needed.
				</p>
			</div>
		</div>
	);
};

export default WhySection;
