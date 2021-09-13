import { combineReducers  } from  'redux';
import counter from './counter/counter';
import todos from './Todos/todos'
import toggleIcon from './common/toggleIcon';
import headerSearch from './insta/header/search'
const rootReducer = combineReducers({
	counter,
	todos,
	toggleIcon,
	headerSearch,
})

export default rootReducer;