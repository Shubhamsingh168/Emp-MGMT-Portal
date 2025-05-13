import React, { useEffect, useState } from 'react';
import Header from './others/Header';
import TaskListNumber from './others/TaskListNumber';
import TaskList from './others/TaskList';
import { motion } from 'framer-motion';

const EmployeeDashboard = (props) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName');
    setUserName(name || 'User');
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-[#1C1C1C] p-6 md:p-10 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Animation */}
      <motion.div
        className="mb-8"
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Header changeUser={props.changeUser} data={props.data} userName={userName} />
      </motion.div>

      {/* Task Number Cards Animation */}
      <motion.div
        className="mb-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <TaskListNumber data={props.data} />
      </motion.div>

      {/* Task List Animation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <TaskList data={props.data} />
      </motion.div>
    </motion.div>
  );
};

export default EmployeeDashboard;
