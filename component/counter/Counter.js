import { useSpring, animated } from 'react-spring';
import styles from './scss/counter.module.scss';


export default function Counter({number, onIncrease, onDecrease}){
	const animatedProps =useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
	return(
		<div className={styles['counter-wrapper']}>
			<animated.div style={animatedProps}>
			<h1 className={styles['count-effect']}>{number}</h1>
			</animated.div>
			<div className={styles['counterBtn-group']}>
				<button onClick={onIncrease}>+1</button>
				<button onClick={onDecrease}>-1</button>
			</div>
		</div>
	)
}