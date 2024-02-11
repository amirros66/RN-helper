export const selectLoading = (reduxState) => reduxState.toDoList.loading;

export const selectError = (reduxState) => reduxState.toDoList.error;

export const selectPatients = (reduxState) => reduxState.toDoList.patients;

export const selectPatientsTasks = (reduxState) => reduxState.toDoList.tasks;
