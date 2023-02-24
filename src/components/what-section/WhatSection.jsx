import styles from "./WhatSection.module.css";

const WhatSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.skillsTitle}>What?</h2>
			<div className={styles.descriptionContainer}>
				<p>Description</p>
			</div>
		</div>
	);
};

export default WhatSection;
