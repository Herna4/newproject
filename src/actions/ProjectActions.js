export const createProject = (project) => {
    return(dispatch, getState) => {
        //make async call to datase
        dispatch({ type: 'CREATE_PROJECT', project })
    }
};