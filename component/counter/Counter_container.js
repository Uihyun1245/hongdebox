import { useDispatch ,useSelector} from "react-redux";
import Counter from "counter";
import {increase, decrease} from "../../module/counter/counter";

const CounterContainer = ()=>{
	const number = useSelector((state)=>{
		return state.counter.number
	}
	)
	const dispatch = useDispatch();

	const  onIncrease = ()=>{
		console.log('Increase');
		dispatch(increase());
	}

	const onDecrease = ()=>{
		console.log('Decrease');
		dispatch(decrease());
	}

	return(
		<Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}></Counter>
	)
}

export default CounterContainer;