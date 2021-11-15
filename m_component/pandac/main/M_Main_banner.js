import styles from './scss/m_main_banner.module.scss';

const MobileMainBanner = ()=>{
	return(
		<section className={styles['banner-section']}>
        <p>
          <strong>PANDA CORPORATION</strong>은<br />
          기존 농산물 유통시장에 빅데이터, 인공지능, 이커머스 등의<br/> 기술을 활용한
          디지털 혁신을 통해 다양한 문제를 해결합니다.
        </p>
		</section>
	)
}

export default MobileMainBanner;