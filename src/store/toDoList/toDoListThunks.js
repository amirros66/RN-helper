import axios from "axios";
import {
  startLoading,
  patientTaskFailed,
  patientSuccess,
  taskSuccess,
  toggleTaskCompleted,
  deleteTasks,
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

/////////////////////////
export const toggleTaskCompletion = (taskId) => {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());
      const response = await axios.patch(`${API_URL}/tasks/${taskId}/toggle`);
      if (response.status === 200) {
        dispatch(toggleTaskCompleted(taskId));
      } else {
        throw new Error("Failed to toggle task completion");
      }
    } catch (error) {
      dispatch(patientTaskFailed(error.toString()));
    }
  };
};

///////////////
export const deletePatientTasks = (patientId) => {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());
      const response = await axios.delete(
        `${API_URL}/patient/${patientId}/tasks/all`
      );
      if (response.status === 200) {
        dispatch(deleteTasks(patientId));
      } else {
        throw new Error("Failed to delete tasks");
      }
    } catch (error) {
      dispatch(patientTaskFailed(error.toString()));
    }
  };
};
