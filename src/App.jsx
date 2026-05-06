import './App.css';
import {useState} from 'react';
import ToDos from './ToDos.jsx';
import AddControl from './AddControl';

export default function App(){

    const initialTodos = [];

    const [todos, setTodos] = useState(initialTodos);

    function handleAdd(t){
        setTodos([...todos, {text: t, done: false}]);
    }

    function handleRemove(i){
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        setTodos(newTodos);
    }

    function toggleTodo(i){
        const newTodos = [...todos];
        newTodos[i].done = !newTodos[i].done;
        setTodos(newTodos);
    }

    return (
        <div>
            <ToDos toDosList={todos} callBack={handleRemove} toggle={toggleTodo} />
            <AddControl callBack={handleAdd}/>
        </div>
    );
}