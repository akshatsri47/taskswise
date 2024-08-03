import axios from "axios";
import { useState, useEffect } from "react";

export default function Task() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    projectId: '',
    userId: '',
  });
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTask((upTask) => ({
      ...upTask,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDueDate = new Date(task.dueDate).toISOString();
      const taskWithFormattedData = { 
        ...task, 
        dueDate: formattedDueDate, 
        priority: parseInt(task.priority, 10),  
        projectId: parseInt(task.projectId, 10), 
        userId: parseInt(task.userId, 10) 
      };
      await axios.post("https://taskswise-2.onrender.com/app/tasks/addtask", taskWithFormattedData);
      setSuccess("Task added successfully!");
    } catch (error) {
      setSuccess(`Failed to add task: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
        />
        <input
          type="text"
          id="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
        />
        <input
          type="date"
          id="dueDate"
          placeholder="Due Date"
          value={task.dueDate}
          onChange={handleChange}
        />
        <input
          type="number"
          id="priority"
          placeholder="Priority"
          value={task.priority}
          onChange={handleChange}
        />
        <input
          type="text"
          id="projectId"
          placeholder="Project ID"
          value={task.projectId}
          onChange={handleChange}
        />
        <input
          type="text"
          id="userId"
          placeholder="UserID"
          value={task.userId}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
      {success && <p>{success}</p>}
    </div>
  );
}
