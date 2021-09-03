import Link from 'next/link';
const SidebarMenu = ({ menuName , url, styles,handleToggle})=>{
return(
	<div className={styles['side-menu']}>
		<Link href={url}>
			<a onClick={handleToggle}>{menuName}</a>
		</Link>
	</div>
)
}

export default SidebarMenu