import styles from "./HeroSection.module.css";

const HeroSection = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heroTitle}>Cohering Minds</h1>
			<div className={styles.heroInfoContainer}>
				<p>Tag line: The platform that enables...</p>
				<p>More Info</p>
			</div>

			<div className={styles.heroImageContainer}>
				<p>A black and white image</p>
			</div>
		</div>
	);
};

export default HeroSection;
