import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserAuth } from '../context/AuthContext';

const AddTask = () => {
  const { user } = UserAuth()

  const [taskDesc, setTaskDesc] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('urgent');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (taskDesc && duration) {
      await addDoc(collection(db, user.displayName), {
        taskDesc,
        duration,
        category
      })

      setTasks([...tasks, { taskDesc, duration, category }]);
      setTaskDesc('');
      setDuration('');
      setCategory('urgent');
      
      toast.success('Task added successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } 
    else {
      toast.warn('please fill in all fields.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    
    toast.info('Task deleted.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className='bg-inherit text-white flex justify-center items-center m-10'>
      <div className='w-3/4'>

        <form onSubmit={handleAddTask} className='flex flex-col gap-5'>
          <div className='flex gap-5 items-center'>
            <input
              id='TaskDesc'
              className='bg-inherit text-white border-2 border-dashed p-3 w-6/12'
              type='text'
              placeholder='enter task'
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
            />

            <input
              className='bg-inherit text-white border-2 border-dashed p-3 w-2/12'
              type='number'
              placeholder='duration'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              min='1' // Ensure duration is at least 1
            />


            <select
              className='bg-black text-white border-2 border-dashed p-3 w-3/12'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='important'>important</option>
              <option value='urgent'>urgent</option>
              <option value='ignorable'>ignorable</option>
            </select>


            <button type='submit' className='bg-[#fce7a3] text-black text-4xl p-1 w-1/12'>+</button>
          </div>

        </form>
        
        <div className='mt-5'>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              taskDesc={task.taskDesc}
              duration={task.duration}
              category={task.category}
              onDelete={() => handleDeleteTask(index)}
            />
          ))}
        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default AddTask;
