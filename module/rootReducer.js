import { combineReducers  } from  'redux';
import { all } from 'redux-saga/effects';

import  apiTest ,{ postsSaga } from './main/api_test'
import counter from './counter/counter';
import todos from './Todos/todos'
import toggleIcon from './common/toggleIcon';
import headerSearch from './insta/header/search'
import deviceDetect from './common/device_detect';
const rootReducer = combineReducers({
	counter,
	todos,
	toggleIcon,
	headerSearch,
	apiTest,
	deviceDetect,
})

export function* rootSaga(){
	yield all([postsSaga()]);
}

export default rootReducer;