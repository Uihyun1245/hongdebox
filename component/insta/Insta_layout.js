import styles from './scss/Insta.module.scss';
import InstaHead from './Insta_header';
const InstaLayout = ({})=>{
	return (
		<div className={styles["instagram-wrapper"]}>
			<InstaHead></InstaHead>
		</div>
	)
}


export default InstaLayout