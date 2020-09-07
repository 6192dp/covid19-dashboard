const routes = {
  V3_COVID19_ALL: {
    path: "v3/covid-19/all",
    method: "get"
  },
  V3_COVID19_CONTINENTS: {
    path: "v3/covid-19/continents",
    method: "get"
  },
  V3_COVID19_ALL_COUNTRIES_DATA: {
    path: "v3/covid-19/countries",
    method: "get"
  },
  V3_COVID19_GET_INDIA_DATA: {
    path: "v3/covid-19/countries/356",
    method: "get"
  },
  V1_USER_SIGNUP: {
    path: "v1/users/signup",
    method: "post"
  },
  V1_USER_LOGIN: {
    path: "v1/users/login",
    method: "post"
  },
  V3_COVID19_VACCINE: {
    path: "v3/covid-19/vaccine",
    method: "get"
  }
};

export default routes;
