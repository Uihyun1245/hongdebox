const SEARCH_READY="header/serach/SEARCH_READY";

export const searchReady = activeState =>({
	type:SEARCH_READY,
	activeState
})

const initialState = {
	active: false,
}

const headerSearch = (state=initialState, action)=>{
	console.log(action);
	switch(action.type){
		case SEARCH_READY:
			return {
				...state,
				active: action.activeState
			}
		default:
			return state;
	}	

}

export default headerSearch;