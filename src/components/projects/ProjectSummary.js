import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div>
          <div className="card z-depth-0 project-summary">
             <div className="card-content grey-text text-darken-3">
               <span className="card-title">{project.title}</span>
               <p>Posted by La Belle Herna</p>
               <p className="grey-text">24th March, 19PM</p>
            </div>
           </div> 
        </div>
    )
}

export default ProjectSummary