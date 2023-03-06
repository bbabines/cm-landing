import styles from "./WhatSection.module.css";

const WhatSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.skillsTitle}>What?</h2>
			<div className={styles.descriptionContainer}>
				<p>You ideate, enter and rank your insights and learnings.</p>
				<p>
					Great, now offer them to the world As others see your learnings you
					look at and interact with other's ideas Interact with chat and
					deliberation tools. Help edit insights and learnings.
				</p>
				<p>Provide feedback by ranking your world favorites</p>
				<p>
					When ready, we organize "campfires" where small groups can share their
					ideas more intimately, understand, feel understood and see different
					points of view.
				</p>
				<p>
					Cohering minds shows all the interactions you've made, how your
					insights rank and how the worlds' ranking of insights is changing As
					you meet more people, consider forming an org to tackle learnings you
					cohere around.
				</p>
				<p>
					Cohering minds offers a foundational and operational platform to build
					from, to help you succeed.
				</p>
			</div>
		</div>
	);
};

export default WhatSection;
