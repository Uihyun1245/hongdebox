import Link from 'next/link';
const SidebarMenu = ({ menuName , url, styles , handleSideBar})=>{
return(
	<div className={styles['side-menu']}>
		<Link href={url}>
			<a onClick={handleSideBar}>{menuName}</a>
		</Link>
	</div>
)
}

export default SidebarMenu