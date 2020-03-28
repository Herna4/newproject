export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('projects').add({
        ...project,
        authorName: 'Tata Pierre',
        authorId: 1234,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      }).catch(error => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, error);
      });
    }
  };