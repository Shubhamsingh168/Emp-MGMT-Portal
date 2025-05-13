import React, { useState, useEffect } from 'react';
import Header from './others/Header';
import CreateTask from './others/CreateTask';
import AllTask from './others/AllTask';

const AdminDashBoard = ({ changeUser }) => {

    const [tasks, setTasks] = useState(() => {
        const saved = JSON.parse(localStorage.getItem('tasks')) || [];
        return saved;
    });

    const updateTaskStatus = (index, status) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return {
                    ...task,
                    new: status === 'newtask',
                    completed: status === 'completed',
                    accepted: status === 'accepted',
                    failed: status === 'failed',
                    active: status === 'newtask' || status === 'accepted',
                };
            }
            return task;
        });

        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Update employee task in localStorage
        const updatedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        const taskToUpdate = updatedTasks[index];
        const employeeIndex = updatedEmployees.findIndex(emp => emp.firstName === taskToUpdate.assignTo);

        if (employeeIndex !== -1) {
            updatedEmployees[employeeIndex].tasks = updatedEmployees[employeeIndex].tasks.map(task => {
                if (
                    task.title === taskToUpdate.title &&
                    task.description === taskToUpdate.description &&
                    task.date === taskToUpdate.date
                ) {
                    return {
                        ...task,
                        new: status === 'newtask',
                        completed: status === 'completed',
                        accepted: status === 'accepted',
                        failed: status === 'failed',
                        active: status === 'newtask' || status === 'accepted',
                    };
                }
                return task;
            });

            // Recalculate taskCount
            const count = { new: 0, completed: 0, accepted: 0, failed: 0, active: 0 };
            updatedEmployees[employeeIndex].tasks.forEach(task => {
                if (task.new) count.new++;
                if (task.completed) count.completed++;
                if (task.accepted) count.accepted++;
                if (task.failed) count.failed++;
                if (task.active) count.active++;
            });

            updatedEmployees[employeeIndex].taskCount = count;
            localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        }

        // Notify other components
        window.dispatchEvent(new Event('tasks-updated'));
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-10">

            <div className="mb-8">
                <Header changeUser={changeUser} />
            </div>

            <div className="mb-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CreateTask />
            </div>

            <div className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <AllTask tasks={tasks} onUpdateStatus={updateTaskStatus} />
            </div>
        </div>
    );
};

export default AdminDashBoard;
