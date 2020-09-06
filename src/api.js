import axios from "axios";
import routes from "./apiRoutes";
import { getStateValue } from "./root/localStorage";
import { put } from "redux-saga/effects";

export default function* api(action) {
  const { isLambdaAPI } = acttion;
  const x = getStateValue("user") || null;
  const token = (x && x.jwt_token) || localStorage.user_token || null;
  const baseUrl = isLambdaAPI
    ? "https://19yst2t73d.execute-api.ap-south-1.amazonaws.com/"
    : "https://disease.sh/";

  const form = action.containsFormData
    ? { "Content-Type": "multipart/form-data" }
    : {};
  const headers = Object.assign({}, { Authorization: token }, form);
  // yield put({ type: "LOADING_START", incomingApi: action.handler });

  try {
    const response = yield axios({
      method: routes[action.handler].method,
      url: baseUrl + routes[action.handler].path,
      data: action.payload || null,
      params: action.query || null,
      headers
    });

    //yield put({ type: "LOADING_STOP", incomingApi: action.handler });
    console.log(response);
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error.response.status === 401) {
        //  yield put({ type: 'USER_LOGOUT' });

        console.log(error);
      } else {
        console.log(error);

        return error.response;
      }
    }
    // returning dummy data to ensure the calling saga doesnt get stuck
    console.log(error);
    return { data: { data: null }, error };
  }
}
