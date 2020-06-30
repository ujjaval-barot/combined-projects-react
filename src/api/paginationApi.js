import Axios from "axios";

const BASE_URL = "http://hn.algolia.com/api/v1/search_by_date?tags=story&page=";
// const url = `/todoList`;
let headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getTableData = (page) => {
  console.log(page);
  return Axios.get(BASE_URL + page);
};
