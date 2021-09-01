import { useSelector, useDispatch } from "react-redux";
import { changeInput, insert, toggle, remove } from "../../module/Todos/todos";
import Todos from "./Todos";

const TodosContinaer = () => {

	const dispatch = useDispatch();
	const input = useSelector(state=>{
		return state.todos.input;
	})
	const todos = useSelector(state=>{
		return state.todos.todos;
	})
	const onChangeInput = (text) =>{
		dispatch(changeInput(text));
	}
	const onInsert = (text) =>{
		dispatch(insert(text));
	}
	const onToggle = (id) =>{
		dispatch(toggle(id));
	}
	const onRemove = (id) =>{
		dispatch(remove(id));
	}


  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
	  onToggle={onToggle}
	  onRemove={onRemove}
    ></Todos>
  );
};

export default TodosContinaer