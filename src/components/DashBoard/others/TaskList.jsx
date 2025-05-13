import React from 'react'
import AcceptTask from '../../TaskList/AcceptTask'
import NewTask from '../../TaskList/NewTask'
import CompleteTask from '../../TaskList/CompleteTask'
import FailedTask from '../../TaskList/FailedTask'

// TaskList component that displays all task types (Accept, New, Complete, Failed)
const TaskList = ({ data }) => {
   
    return (
        // Container for all task cards
        // Using a responsive grid layout with up to 4 columns on medium+ screens
        // Ensures alignment with top summary cards and better structure
        <div id='TaskList' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mt-10' >
          {data.tasks.map((elem , idx)=>{
             //console.log("Task element:", elem); // Log each task object

             if (elem.active ) {
                return <CompleteTask key={idx} data={elem}/>
            }
            else if (elem.completed ) {
                return <AcceptTask key={idx} data={elem}/>
            }
            else if (elem.accepted  ) {
                return <NewTask key={idx} data={elem}/>
                                                                                                         
            }
            else if (elem.failed) {
                return <FailedTask key={idx} data={elem}/>
            }
            
          })}
        </div>
    )
}

export default TaskList





// condition ? expressionIfTrue : expressionIfFalse;
// const isActive = true;
// const status = isActive ? "Active" : "Inactive";

// console.log(status);  // Output: "Active"




// import React from 'react'
// import AcceptTask from '../../TaskList/AcceptTask'
// import NewTask from '../../TaskList/NewTask'
// import CompleteTask from '../../TaskList/CompleteTask'
// import FailedTask from '../../TaskList/FailedTask'

// // TaskList component that displays all task types (Accept, New, Complete, Failed)
// const TaskList = ({ data }) => {
//     return (
//         // Container for all task cards
//         // Using a responsive grid layout with up to 4 columns on medium+ screens
//         // Ensures alignment with top summary cards and better structure
//         <div
//             id='TaskList'
//             className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mt-10'
//         >
//             {/* Card showing an accepted task */}
//             <AcceptTask />

//             {/* Card showing a new task */}
//             <NewTask />

//             {/* Card showing a completed task */}
//             <CompleteTask />

//             {/* Card showing a failed task */}
//             <FailedTask />
//         </div>
//     )
// }

// export default TaskList
