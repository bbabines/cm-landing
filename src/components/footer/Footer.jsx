import styles from "./Footer.module.css";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.nameContainer}>
				<p>
					<FaDiscord className={styles.icons} />
				</p>
			</div>
		</div>
	);
};

export default Footer;
