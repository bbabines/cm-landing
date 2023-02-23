import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navContainer}>
				<div className={styles.nameContainer}>
					<a className={styles.name}>Cohering Minds</a>
				</div>

				<div className={styles.navLinksContainer}>
					<a className={styles.navLinks}>Home</a>
					<a className={styles.navLinks}>About</a>
					<a className={styles.navLinks}>Skills</a>
					<a className={styles.navLinks}>Projects</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
