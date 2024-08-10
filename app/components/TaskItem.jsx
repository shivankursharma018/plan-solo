import React from 'react';

const categoryColors = {
  important: 'bg-green-500 text-black',
  urgent: 'bg-yellow-500 text-black',
  ignorable: 'bg-gray-500 text-black'
};

const TaskItem = ({ taskDesc, duration, category, onDelete }) => {
  const categoryClass = categoryColors[category] || 'bg-gray-500 text-white';

  return (
    <div className='flex items-center justify-between bg-gray-800 p-3 mb-2 rounded'>
      <div className='flex flex-col'>
        <span className='text-white text-clip'>{taskDesc}</span>
        <span className='text-gray-300'>{`Duration: ${duration} hrs.`}</span>
      </div>
      <span className={`text-center w-32 ${categoryClass}`}>
        {category}
      </span>
      <button onClick={onDelete} className='bg-red-600 text-white px-4 py-1'>x</button>
    </div>
  );
};

export default TaskItem;
