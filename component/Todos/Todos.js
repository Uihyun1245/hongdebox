import styles from './scss/Todos.module.scss'

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div className={styles['todo']}>
      <input
        type="checkbox"
        name="todoInput"
        id="todoInput"
        onChange={() => onToggle(todo.id)}
		checked={todo.done?'checked':''}
      />
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <div className={styles['todo-wrapper']}>
      <form className={styles['todo-inputGroup']} onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={input} />
        <button type="submit">등록</button>
      </form>
      <div className={styles['todo-list']}>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
            key={`todo${todo.id}`}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
};

export default Todos;
