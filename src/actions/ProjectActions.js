export const createProject = (project) => {
    return(dispatch, getState, { getFirestore, getFirebase }) => {
        //make async call to datase
        dispatch({ type: 'CREATE_PROJECT', project })
    }
};