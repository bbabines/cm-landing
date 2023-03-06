import styles from "./WhySection.module.css";

const WhySection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.projectTitle}>Why?</h2>
			<div className={styles.detailsContainer}>
				<p className={styles.whyDetails}>
					Have you ever had a great idea? An aha moment.
				</p>
				<p>Then try to have the world hear or see it through social media?</p>
				<p>After a while the whole thing vanishes...poof. It's terrible.</p>
				<p>Well we hear you and feel the same.</p>
			</div>
		</div>
	);
};

export default WhySection;
