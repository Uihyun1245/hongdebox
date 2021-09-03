import { combineReducers  } from  'redux';
import counter from './counter/counter';
import todos from './Todos/todos'
import toggleIcon from './common/toggleIcon';

const rootReducer = combineReducers({
	counter,
	todos,
	toggleIcon
})

export default rootReducer;