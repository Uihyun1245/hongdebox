import PandacLayout from "../../component/pandacorperation/pandac_layout";
import MainIntro from "../../component/pandacorperation/main/main_intro";
const PandacMain = () =>{
	return(
		<div className="container">
			<MainIntro></MainIntro>
			<MainIntro></MainIntro>
			<MainIntro></MainIntro>
			<MainIntro></MainIntro>
			<MainIntro></MainIntro>
			<MainIntro></MainIntro>
		</div>
	)
}

PandacMain.Layout = PandacLayout;

export default PandacMain;