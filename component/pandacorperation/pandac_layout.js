import PandacHeader from "./pandac_header";
import MainIntro from "./main/main_intro";
import MainBanner from "./main/main_banner";
import styles from './scss/pandac_layout.module.scss'
const PandacLayout = ()=>{
	return(
		<div className={styles["pandac-wrapper"]}>
			<PandacHeader></PandacHeader>
			<MainIntro></MainIntro>
			<MainBanner></MainBanner>
		</div>
	)
}

export default PandacLayout;