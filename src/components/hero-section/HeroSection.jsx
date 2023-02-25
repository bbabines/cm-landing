import styles from "./HeroSection.module.css";
import { Button } from "react-bootstrap";

const HeroSection = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heroTitle}>Cohering Minds</h1>
			<div className={styles.heroContainer}>
				<div className={styles.heroInfoContainer}>
					<h4 className={styles.intro}>
						Connecting computers and people so collectively we act more
						intelligently than ever before!
					</h4>
					<p>
						Every individual, organization, or group could thrive more
						successfully if it tapped into a bigger mind drawing on the brain
						power of other people and machines.
					</p>
					<Button variant="secondary">More Info</Button>
				</div>
				<div className={styles.heroImageContainer}>
					<img className={styles.webImage} src="web.png" />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
