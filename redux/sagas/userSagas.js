import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../config/types";

const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=20";

const getApi = () => {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};

function* fetchUsers(action) {
  try {
    const users = yield call(getApi, action.payload);
    yield put(getUsersSuccess(users));
  } catch (error) {
    yield put(getUserError(error.message));
  }
}

export const getUsersSuccess = (users) => {
  console.log("request users success");
  return {
    type: types.GET_USERS_SUCCESS,
    payload: {
      loading: false,
      users: users
    }
  };
};

export const getUserError = (error) => {
  console.log("request users error");
  return {
    type: types.GET_USERS_FAILED,
    error: error
  };
};

function* userSaga() {
  yield takeEvery(types.GET_USERS_REQUEST, fetchUsers);
}

export default userSaga;
