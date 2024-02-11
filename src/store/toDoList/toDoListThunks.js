import axios from "axios";
import {
  startLoading,
  patientTaskFailed,
  patientSuccess,
  taskSuccess,
} from "./toDoListSlice";

const API_URL = "http://127.0.0.1:8000";

export const createPatient = (id, name) => {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());

      const response = await axios.post(
        `${API_URL}/patients`,
        { id, name }
        // { headers: { Authorization: `Bearer ${token}` } }
      );

      dispatch(patientSuccess(response.data));
    } catch (error) {
      dispatch(patientTaskFailed(error.message));
    }
  };
};

////////////////////////////

export const createTask = (patient_id, title) => {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());

      const response = await axios.post(
        `${API_URL}/patient/${patient_id}/tasks`,
        { title }
        // { headers: { Authorization: `Bearer ${token}` } }
      );

      dispatch(taskSuccess(response.data));
    } catch (error) {
      dispatch(patientTaskFailed(error.message));
    }
  };
};
