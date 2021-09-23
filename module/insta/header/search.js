const SEARCH_READY = "header/search/SEARCH_READY";
const CLOSE_SEARCH = "header/search/CLOSE_SEARCH"
export const searchReady = activeState =>({
	type:SEARCH_READY,
	activeState
})

export const closeSearch = ()=>({
	type:CLOSE_SEARCH,
})

const initialState = {
	active: false,
}

const headerSearch = (state=initialState, action)=>{
	switch(action.type){
		case SEARCH_READY:
			return {
				...state,
				active: action.activeState
			}
		case CLOSE_SEARCH:
			return{
				...state,
				active:false
			}
		default:
			return state;
	}	

}

export default headerSearch;