import styles from "./HowSection.module.css";

const HowSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.aboutTitle}>How?</h2>
			<div className={styles.infoContainer}>
				<p>
					Share your insights, connect with others in digital campfires, rank
					order the best aha moments and work together to make them happen.
				</p>
			</div>
		</div>
	);
};

export default HowSection;
