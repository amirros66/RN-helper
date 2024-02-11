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
//Thunk to get user bookings

// export const getUserBooking = (token) => {
//   return async function thunk(dispatch) {
//     try {
//       dispatch(startLoading());

//       const response = await axios.get(`${API_URL}/booking/mybookings`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       dispatch(bookingsFetchSuccess(response.data));
//     } catch (error) {
//       dispatch(bookingFetchFailed(error.message));
//     }
//   };
// };
