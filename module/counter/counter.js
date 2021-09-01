//Declare Action name
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


//Declare Action function
export const increase = () =>({type:INCREASE})
export const decrease = () =>({type:DECREASE})
	

//initail state
const initailState = {
number:0
}

const counter = (state=initailState,action)=>{
	switch(action.type){
		case INCREASE:
			return {
				number: state.number+1
			};
		case DECREASE:
			return{
				number: state.number -1
			};
		default:
			return state;
	}
}

export default counter;