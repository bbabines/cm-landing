import styles from "./WhatSection.module.css";

const WhatSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.skillsTitle}>What is Cohering Minds?</h2>
			<div className={styles.descriptionContainer}>
				<p>Description</p>
			</div>
		</div>
	);
};

export default WhatSection;
