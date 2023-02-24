import styles from "./HowSection.module.css";

const HowSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.aboutTitle}>How?</h2>
			<div className={styles.infoContainer}>
				<p>
					More info about how to achieve decentralized collective intelligence
				</p>
				<p>
					Perhaps add the values we are starting from that will lead us to an
					MVP and/or a timeline.
				</p>
			</div>
		</div>
	);
};

export default HowSection;
