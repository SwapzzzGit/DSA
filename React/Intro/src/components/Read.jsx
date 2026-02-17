const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const deleteHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id != id);
    settodos(updatedTodos);
    console.log(`deleting,${id}`);
  };

  return (
    <>
      <h1>Pending Todos</h1>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <span onClick={() => deleteHandler(todo.id)}>| delete</span>{" "}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Read;
