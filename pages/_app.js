import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../module/rootReducer";
import SideBarContainer from "../component/sidebar/SidebarMenu_container";

import "../styles/globals.css";

const store = createStore(rootReducer, composeWithDevTools());

//추후 토글시 URL에 맞는 메뉴 Active 기능 추가하기

function MyApp({ Component, pageProps }) {
  const getLayout = Component.Layout ? (
    <Component.Layout>
        <Component {...pageProps} />
    </Component.Layout>
  ):(
    <Component {...pageProps} />
  );
  console.log(getLayout);
  return (
    <div className="wrapper">
      <Provider store={store}>
          <SideBarContainer></SideBarContainer>
          {getLayout}
      </Provider>
    </div>
  );
}

export default MyApp;
