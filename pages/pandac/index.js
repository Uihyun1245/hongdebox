import PandacLayout from "/component/pandac/common/Pandac_layout";
import MainIntro from "/component/pandac/main/Main_intro";
import MainBanner from "/component/pandac/main/Main_banner";
import MainService from "/component/pandac/main/Main_service";
import MainPandac from "/component/pandac/main/Main_pandac";
import MainCueat from "/component/pandac/main/Main_cueat";
import MainYelloment from "/component/pandac/main/Main_yelloment";
import MainAgripa from "/component/pandac/main/Main_agripa";
import styles from "/styles/scss/pandac/pandac_main.module.scss";
const PandacMain = () =>{
	return(
		<div className={styles["container"]}>
			<MainIntro></MainIntro>
			<MainBanner></MainBanner>
			<MainService></MainService>
			<MainPandac></MainPandac>
			<MainCueat></MainCueat>
			<MainYelloment></MainYelloment>
			<MainAgripa></MainAgripa>
		</div>
	)
}

PandacMain.Layout = PandacLayout;

export default PandacMain;
