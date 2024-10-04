import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import { db } from '../firebase';
import { addDoc, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserAuth } from '../context/AuthContext';

const AddTask = () => {
  const { user } = UserAuth();
  const [taskDesc, setTaskDesc] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('urgent');
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(collection(db, user.displayName), (snapshot) => {
      const tasksData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(tasksData);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (taskDesc && duration) {
      try {
        await addDoc(collection(db, user.displayName), {
          taskDesc,
          duration,
          category,
          timestamp: new Date()
        });
        
        setTaskDesc('');
        setDuration('');
        setCategory('urgent');
        
        toast.success('Task added successfully!');
      } catch (error) {
        toast.error('Error adding task: ' + error.message);
      }
    } else {
      toast.warn('Please fill in all fields.');
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(db, user.displayName, taskId));
      toast.info('Task deleted.');
    } catch (error) {
      toast.error('Error deleting task: ' + error.message);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className='bg-inherit text-white px-4 sm:px-6 lg:px-8 py-6'>
      <div className='max-w-7xl mx-auto'>
        <form onSubmit={handleAddTask} className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4'>
            {/* Task Description - takes up full width on mobile, half on tablet, 6/12 on desktop */}
            <input
              id='TaskDesc'
              className='col-span-1 sm:col-span-1 lg:col-span-6 bg-inherit text-white border-2 border-dashed p-3 rounded-md'
              type='text'
              placeholder='Enter task'
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
            />
            
            {/* Duration - takes up full width on mobile, half on tablet, 2/12 on desktop */}
            <input
              className='col-span-1 sm:col-span-1 lg:col-span-2 bg-inherit text-white border-2 border-dashed p-3 rounded-md'
              type='number'
              placeholder='Duration'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              min='1'
            />
            
            {/* Category - takes up full width on mobile, half on tablet, 3/12 on desktop */}
            <select
              className='col-span-1 sm:col-span-1 lg:col-span-3 bg-black text-white border-2 border-dashed p-3 rounded-md'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='important'>Important</option>
              <option value='urgent'>Urgent</option>
              <option value='ignorable'>Ignorable</option>
            </select>
            
            {/* Add button - takes up full width on mobile, remaining space on larger screens */}
            <button 
              type='submit' 
              className='col-span-1 sm:col-span-2 lg:col-span-1 bg-[#fce7a3] text-black text-2xl sm:text-4xl p-1 rounded-md hover:bg-[#f0d47f] transition-colors'
            >
              +
            </button>
          </div>
        </form>
        
        <div className='mt-6 space-y-4'>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              taskDesc={task.taskDesc}
              duration={task.duration}
              category={task.category}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
      </div>
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default AddTask;