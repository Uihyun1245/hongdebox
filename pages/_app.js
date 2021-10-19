import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { rootSaga } from "../module/rootReducer";
import SideBarContainer from "../component/common/sidebar/SidebarMenu_container";
import MobileSideBarContainer from "../m_component/common/sidebar/M_SidebarMenu_container";
import { DeviceCheck } from "../utils/common/deviceCheck";
import "../styles/globals.css";

applyMiddleware;
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

//추후 토글시 URL에 맞는 메뉴 Active 기능 추가하기

function MyApp({ Component, pageProps }) {
  const pageProperty = DeviceCheck(pageProps);
  const getLayout = () => {
    if (Component.Layout && pageProperty.device) {
      const Layout = Component.Layout[pageProperty.device];
      return Layout ? (
        <Layout>
          <Component {...pageProperty}></Component>
        </Layout>
      ) : (
        <Component {...pageProperty}></Component>
      );
    } else {
      return <Component {...pageProperty}></Component>;
    }
  };
  return (
    <div className="wrapper">
      <Provider store={configureStore()}>
        {pageProperty.device !== "mobile" ? (
          <SideBarContainer></SideBarContainer>
        ) : (
          <MobileSideBarContainer></MobileSideBarContainer>
        )}
        {getLayout()}
      </Provider>
    </div>
  );
}

export default MyApp;
