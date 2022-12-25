import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../api/apiSlice";

function TaskList() {
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h4>{task.name}</h4>
          <p>{task.description}</p>
          <span>{task.completed ? "completed" : "not completed"}</span>
          <button onClick={() => deleteTask(task.id)}>delete</button>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) =>
              updateTask({ ...task, completed: e.target.checked })
            }
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
