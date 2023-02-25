import styles from "./WhatSection.module.css";

const WhatSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.skillsTitle}>What?</h2>
			<div className={styles.descriptionContainer}>
				<p>
					1. Effectively harness collective intelligence while combating
					barriers to CI. (Add in action and repeating portion so its clear.
					Ratchet so never going backwards.)
				</p>
				<p>2. Distill knowledge into different tiers.</p>
				<p>
					3. Help groups start looking for group (LFG) and looking for more
					(LFM)), governance (FL) / coherence (Prosocial), and scale (cellular
					model).
				</p>
			</div>
		</div>
	);
};

export default WhatSection;
