import React from 'react';

const categoryColors = {
  important: 'border-2 border-green-500 text-green-500',
  urgent: 'border-2 border-yellow-500 text-yellow-500',
  ignorable: 'border-2 border-cyan-500 text-cyan-500'
};

const TaskItem = ({ taskDesc, duration, category, onDelete }) => {
  const categoryClass = categoryColors[category] || 'bg-gray-500 text-white';
  
  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-800 p-4 rounded-lg shadow transition-all hover:shadow-lg'>
      <div className='flex flex-col mb-2 sm:mb-0 flex-grow'>
        <span className='text-white text-clip text-lg mb-1'>{taskDesc}</span>
        <span className='text-gray-300 text-sm'>{`Duration: ${duration} hrs`}</span>
      </div>
      
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto'>
        <span className={`px-3 py-1 rounded text-sm font-medium ${categoryClass} w-full sm:w-auto text-center`}>
          {category}
        </span>
        <button 
          onClick={onDelete} 
          className='border-2 border-red-600 text-red-600 px-4 py-1 rounded font-bold hover:bg-red-700 hover:text-white transition-colors w-full sm:w-auto'
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TaskItem;