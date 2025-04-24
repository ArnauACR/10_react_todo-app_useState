import { useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.description.trim()) {
      onAddTask(formData);
      setFormData({
        title: '',
        description: '',
        status: 'pending'
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__group}>
        <label htmlFor="title" className={styles.form__label}>Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={styles.form__input}
          required
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="description" className={styles.form__label}>Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={styles.form__textarea}
          required
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="status" className={styles.form__label}>Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className={styles.form__select}
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button type="submit" className={styles.form__button}>Add Task</button>
    </form>
  );
}

export default TaskForm;
