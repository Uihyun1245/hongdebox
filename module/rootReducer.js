import { combineReducers  } from  'redux';
import counter from './counter/counter';
import todos from './Todos/todos'

const rootReducer = combineReducers({
	counter,
	todos
})

export default rootReducer;