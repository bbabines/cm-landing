import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Navbar.module.css";
import { SiMinds } from "react-icons/si";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navContainer}>
				<div className={styles.navLinksContainer}>
					{/* <SiMinds className={styles.logo} /> */}
					<a className={styles.navLinks}>Home</a>
					<a className={styles.navLinks}>What?</a>
					<a className={styles.navLinks}>Why?</a>
					<a className={styles.navLinks}>How?</a>
					<a className={styles.navLinks}>Contact</a>
					<a className={styles.navLinks}>Learn More</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
