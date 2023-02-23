import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.versionContainer}>
				<p className={styles.version}>v3.0</p>
			</div>
			<div className={styles.iconContainer}></div>
		</div>
	);
};

export default Footer;
