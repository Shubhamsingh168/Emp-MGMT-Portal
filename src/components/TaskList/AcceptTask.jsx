import React from 'react';

// Functional component to render a red "Accepted Task" card
const AcceptTask = ({data}) => {
    console.log()
    return (
        // Outer container for the card with fixed width and padding
        <div className='flex-shrink-0 h-full p-5 w-[300px] bg-blue-500 rounded-xl'>
            
            {/* Header section: Priority label and date */}
            <div className='flex justify-between items-center'>
                
                {/* Priority badge with styling */}
                <span className='bg-red-600 text-white text-sm px-3 py-1 rounded-md font-semibold w-fit'>
                    {data.category}
                </span>

                {/* Task due date */}
                <h4 className='text-sm'>{data.date}</h4>
            </div>

            {/* Task title */}
            <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>

            {/* Task description */}
            <p className='text-sm mt-2'>
                {data.description}
            </p>

            {/* Action buttons: Completed and Failed */}
            <div className='flex justify-between mt-4'>
                {/* Completed Button */}
                <button className='bg-white text-gray-800 py-2 px-4 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-white-700 hover:scale-105 hover:shadow-2xl'>
                    Completed
                </button>

                {/* Failed Button */}
                <button className='bg-white text-gray-800 py-2 px-4 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-white-700 hover:scale-105 hover:shadow-2xl'>
                    Failed
                </button>
            </div>
        </div>
    );
};

export default AcceptTask;
