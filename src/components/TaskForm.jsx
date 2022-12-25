import { useCreateTaskMutation } from "../api/apiSlice";

function TaskForm() {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const description = e.target.elements.description.value;
    const completed = e.target.elements.completed.checked;

    const bodyToSend = {
      name,
      description,
      completed,
    };

    createTask(bodyToSend);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="text" name="description" />
      <input type="checkbox" name="completed" />
      <button>Add task</button>
    </form>
  );
}

export default TaskForm;
