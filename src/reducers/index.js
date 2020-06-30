import { combineReducers } from "redux";
import employee from "./employee";
import astroid from "./astroid";
import country from "./country";
import menu from "./menu";
import todo from "./todo";
import pagination from "./pagination";

export default (history) =>
  combineReducers({
    employee,
    astroid,
    country,
    menu,
    todo,
    pagination,
  });
