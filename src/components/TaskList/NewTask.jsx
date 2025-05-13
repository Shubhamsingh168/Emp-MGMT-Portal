import React from 'react';

const NewTask = ({data}) => {
    return (
        <>
            <div className='flex-shrink-0 h-full p-5 w-[300px] bg-green-500 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1'>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-2'>{data.description}</p>
                {/* Creative Button */}
                <div className='mt-4 justify-between flex gap-2'>
                    <button className='bg-white w-full text-gray-800 py-2 px-4 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-white-700 hover:scale-105 hover:shadow-2xl'>
                        AcceptTask
                    </button>
                </div>
            </div>
        </>
    );
}

export default NewTask;
