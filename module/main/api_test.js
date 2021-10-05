import { getPosts } from "../../pages/api/posts";
import { call, put, takeEvery,takeLatest } from "redux-saga/effects";
const GET_POST = "main/GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

//dispatch 할때 호출되는 action 함수
export const getPost = () => ({
  type: GET_POST,
});


//개별 saga 함수
function* getPostSaga() {
  try {
    const posts = yield call(getPosts);
    yield put({
      type: GET_POST_SUCCESS,
      payload: posts.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST_ERROR,
      error: true,
      payload: e,
    });
  }
}

//총 saga 함수
export function* postsSaga() {
  yield takeLatest(GET_POST, getPostSaga);
}

let initialState = {
  posts: "",
};


//reducer
const apiTest = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default apiTest;
