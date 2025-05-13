import React, { useState, useEffect } from 'react';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);

    // Load tasks from localStorage on mount
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
    
        const newTask = {
            title,
            date,
            assignTo,
            category,
            description,
            newtask: true,
            completed: false,
            accepted: false,
            failed: false
        };
    
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
        // Update the taskCount of the assigned employee
        const updatedEmployees = JSON.parse(localStorage.getItem('employees'));
        const employeeIndex = updatedEmployees.findIndex(emp => emp.firstName === assignTo);
        if (employeeIndex !== -1) {
            updatedEmployees[employeeIndex].taskCount.new += 1; // Increment the 'new' task count
            localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        }
    
        // Notify other components
        window.dispatchEvent(new Event('tasks-updated'));
    
        // Reset form fields
        setTitle('');
        setDate('');
        setAssignTo('');
        setCategory('');
        setDescription('');
    };
    

    const deleteTask = (indexToDelete) => {
        const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
        // ✅ Notify other components
        window.dispatchEvent(new Event('tasks-updated'));
    };
    
    const updateTaskStatus = (index, status) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return {
                    ...task,
                    newtask: status === 'newtask',
                    completed: status === 'completed',
                    accepted: status === 'accepted',
                    failed: status === 'failed',
                };
            }
            return task;
        });
    
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
        // ✅ Notify other components
        window.dispatchEvent(new Event('tasks-updated'));
    };
    

    return (
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded-lg text-white">
            <form onSubmit={submitHandler} className="flex flex-wrap justify-between gap-4">
                <div className="flex flex-col gap-4 w-full md:w-[48%]">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
                        <input
                            type="text"
                            placeholder="Make a UI Design"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 rounded bg-white text-sm border text-[#1c1c1c]"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Date</h3>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full p-2 rounded bg-white text-black text-sm"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
                        <input
                            type="text"
                            placeholder="Employee Name"
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="w-full p-2 rounded bg-white text-black text-sm"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Category</h3>
                        <input
                            type="text"
                            placeholder="design, dev, etc"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 rounded bg-white text-black text-sm"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-[48%] justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-sm text-gray-300 mb-1">Description</h3>
                        <textarea
                            rows="9"
                            placeholder="Describe the task..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 rounded bg-white text-black text-sm resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded transition-all"
                    >
                        Create Task
                    </button>
                </div>
            </form>

            {/* Saved Tasks List */}
            {tasks.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Saved Tasks:</h2>
                    <ul className="space-y-4">
                        {tasks.map((task, index) => (
                            <li key={index} className="bg-gray-800 p-4 rounded">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p><strong>Title:</strong> {task.title}</p>
                                        <p><strong>Assign To:</strong> {task.assignTo}</p>
                                        <p><strong>Date:</strong> {task.date}</p>
                                        <p><strong>Category:</strong> {task.category}</p>
                                        <p><strong>Status:</strong> {
                                            task.completed ? '✅ Completed' :
                                            task.accepted ? '🟢 Accepted' :
                                            task.failed ? '❌ Failed' :
                                            '🆕 New'
                                        }</p>
                                    </div>
                                    <button
                                        onClick={() => deleteTask(index)}
                                        className="ml-4 bg-red-500 hover:bg-red-600 px-3 py-1 text-sm rounded"
                                    >
                                        Delete
                                    </button>
                                </div>

                                {/* Status Buttons */}
                                <div className="mt-3 flex gap-2 flex-wrap">
                                    <button
                                        onClick={() => updateTaskStatus(index, 'newtask')}
                                        className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-sm"
                                    >
                                        Set New
                                    </button>
                                    <button
                                        onClick={() => updateTaskStatus(index, 'completed')}
                                        className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded text-sm"
                                    >
                                        Mark Completed
                                    </button>
                                    <button
                                        onClick={() => updateTaskStatus(index, 'accepted')}
                                        className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded text-sm"
                                    >
                                        Accept Task
                                    </button>
                                    <button
                                        onClick={() => updateTaskStatus(index, 'failed')}
                                        className="bg-red-400 hover:bg-red-500 px-2 py-1 rounded text-sm"
                                    >
                                        Mark Failed
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
        </div>
    );
};

export default CreateTask;
