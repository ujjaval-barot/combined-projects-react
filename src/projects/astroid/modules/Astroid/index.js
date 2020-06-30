import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as astroidActions from "../../../../actions/astroidActions";
import Astroid from "./Astroid";

export default withRouter(
  connect(
    (state) => ({
      astroid: state.astroid,
    }),
    (dispatch) => ({})
  )(Astroid)
);
