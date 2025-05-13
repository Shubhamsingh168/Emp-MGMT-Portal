import React, { useContext } from 'react';
import { Authcontext } from '../../../context/AuthProvider';

const AllTask = ({ tasks, onUpdateStatus }) => {
  const authData = useContext(Authcontext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded-2xl max-h-[500px] overflow-auto">
      {/* Header Row */}
      <div className="bg-[#2b2b2b] mb-4 py-2 px-4 flex justify-between rounded-2xl text-white font-semibold">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New</h3>
        <h5 className="w-1/5">Active</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>

      {/* List of Employees */}
      {authData?.employees?.map((employee, empIndex) => (
        <div key={empIndex} className="mb-6">
          {/* Employee Summary Row */}
          <div className="bg-[#2a1c1c] text-white py-2 px-4 flex justify-between items-center rounded-2xl shadow-md shadow-black/30 mb-2">
            <h2 className="w-1/5 font-medium">{employee.firstName}</h2>
            <div className="w-1/5 bg-blue-600 text-center py-1 rounded-md font-semibold">{employee.taskCount?.new}</div>
            <div className="w-1/5 bg-orange-600 text-center py-1 rounded-md font-semibold">{employee.taskCount?.active}</div>
            <div className="w-1/5 bg-green-600 text-center py-1 rounded-md font-semibold">{employee.taskCount?.completed}</div>
            <div className="w-1/5 bg-red-600 text-center py-1 rounded-md font-semibold">{employee.taskCount?.failed}</div>
          </div>

          {/* Tasks Assigned to This Employee */}
          {tasks
            .map((task, index) => ({ ...task, index })) // Keep original index
            .filter(task => task.assignTo === employee.firstName)
            .map(task => (
              <div key={task.index} className="ml-4 mb-2 p-3 bg-[#333] rounded-xl text-white shadow-sm flex flex-col gap-2">
                <div className="font-semibold">{task.title}</div>
                <div className="text-sm text-gray-400">{task.description}</div>
                <div className="flex gap-2 flex-wrap mt-1">
                  <button onClick={() => onUpdateStatus(task.index, 'newtask')} className="bg-blue-700 px-3 py-1 rounded hover:bg-blue-600 text-sm">Set New</button>
                  <button onClick={() => onUpdateStatus(task.index, 'accepted')} className="bg-orange-700 px-3 py-1 rounded hover:bg-orange-600 text-sm">Accept</button>
                  <button onClick={() => onUpdateStatus(task.index, 'completed')} className="bg-green-700 px-3 py-1 rounded hover:bg-green-600 text-sm">Mark Completed</button>
                  <button onClick={() => onUpdateStatus(task.index, 'failed')} className="bg-red-700 px-3 py-1 rounded hover:bg-red-600 text-sm">Mark Failed</button>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default AllTask;
