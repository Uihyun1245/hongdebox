import { createStore , applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { rootSaga } from "../module/rootReducer";
import SideBarContainer from "../component/common/sidebar/SidebarMenu_container";

import "../styles/globals.css";

applyMiddleware
const configureStore = ()=>{
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store
}


//추후 토글시 URL에 맞는 메뉴 Active 기능 추가하기

function MyApp({ Component, pageProps }) {
  const getLayout = Component.Layout ? (
    <Component.Layout>
      <Component { ...pageProps }/>
    </Component.Layout>
  ) : (
    <Component {...pageProps} >
      {"asdfasfasdf"}
      </Component>
  );

  return (
    <div className="wrapper">
      <Provider store={configureStore()}>
        <SideBarContainer></SideBarContainer>
        {getLayout}
      </Provider>
    </div>
  );
}

export default MyApp;
