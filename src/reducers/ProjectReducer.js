const initState = {
    projects: [
        {id: '1', title: 'help for covid-19', content: 'It is very contagious'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'help for Haitian people', content: 'blah blah blah'}
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
          console.log('create project', action.project);
          return state;
        case 'CREATE_PROJECT_ERROR':
           console.log('create project ERROR', action.error);
           return state
        default:
          return state;
    }
}

export default ProjectReducer