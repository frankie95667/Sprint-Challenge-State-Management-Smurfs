import axios from "axios";
import {
  GET_INITIAL_SMURFS,
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF
} from "../reducers/smurfsReducer";

const BASE_URI = "http://localhost:3333";

export const getInitialSmurfs = () => dispatch => {
  axios
    .get(BASE_URI + "/smurfs")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_INITIAL_SMURFS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const addSmurf = smurf => dispatch => {
  axios
    .post(BASE_URI + "/smurfs", smurf)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: ADD_SMURF,
        payload: res.data
      });
    })
    .catch(err => console.log(err.message));
};

export const updateSmurf = (id, updatedSmurf) => dispatch => {
  axios
    .put(`${BASE_URI}/smurfs/${id}`, updatedSmurf)
    .then(res =>
      dispatch({
        type: UPDATE_SMURF,
        payload: res.data
      })
    )
    .catch(err => console.log(err.message));
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`${BASE_URI}/smurfs/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SMURF,
        payload: res.data
      })
    )
    .catch(err => console.log(err.message));
};
