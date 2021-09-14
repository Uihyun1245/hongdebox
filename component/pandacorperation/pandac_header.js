import styles from "./scss/pandac_header.module.scss";

const PandacHeader= ()=>{
	const menuList = [
		{menuName:"판다코퍼레이션", menuUrl:"/pandac/pandac/"},
		{menuName:"큐잇", menuUrl:"/pandac/cueat/"},
		{menuName:"옐로먼트", menuUrl:"/pandac/yellowment/"},
		{menuName:"아그리파", menuUrl:"/pandac/agripa/"},
	]
	const headerMenu = ()=>{
		const menuCompo = [];
		for (let i = 0 , len= menuList.length; i < len; i++) {
			const menu = menuList[i];
			menuCompo.push(
				<li key={`menu${i}`}>
					<a href={menu.menuUrl}>{menu.menuName}</a>
				</li>
			)
		}
		return menuCompo;
	}

	return(
		<header className={styles["header"]}>
		<div className={styles["logo-container"]}>
		  <a href="/">
			<img
			  src="/images/pandac/common/padac_logo.png"
			  alt="판다코퍼레이션 메인로고"
			/>
		  </a>
		</div>
		<div className={styles["menu-container"]}>
		  <ul className={styles["menu-list"]}>
			{headerMenu()}
		  </ul>
		</div>
	  </header>
	)
}

export default PandacHeader