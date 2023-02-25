import styles from "./WhySection.module.css";

const WhySection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.projectTitle}>Why?</h2>
			<div className={styles.detailsContainer}>
				<p className={styles.whyDetails}>
					As groups expand, group coherence fails due to the geometric growth of
					communication relationships. BBM process eliminates this effect:
					assuring viable individual communication bandwidth leading to
					coherence at scale.
				</p>
				<p>
					We believe in collectively creating stepping stones aimed at the
					world’s wicked problems.
				</p>
				<p>
					We believe in Connecting computers and people so collectively we act
					more intelligently than ever before.
				</p>
				<p>
					The Cohering Minds Platform connects people and computers so
					collectively we act more intelligently than ever before.
				</p>
			</div>
		</div>
	);
};

export default WhySection;
