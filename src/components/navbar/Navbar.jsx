import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navContainer}>
				<a className={styles.name}>Cohering Minds</a>

				<a className={styles.homeLink}>Home</a>
				<a className={styles.navLinks}>About</a>
				<a className={styles.navLinks}>Skills</a>
				<a className={styles.navLinks}>Projects</a>
			</div>
		</div>
	);
};

export default Navbar;
