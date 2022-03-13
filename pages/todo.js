import React, {useEffect} from 'react'
import InputForm from '../components/InputForm';
import axios from 'axios';

function Todo() {
    const [todoBody, setTodoBody] = React.useState({
        task: '',
        team: '',
    })

    const [todos, setTodos] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/get')
        .then(res => {
            setTodos(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const addTodo = async (e) => {
        e.preventDefault()
        let response = await axios.post('/api/save', todoBody);
        if (response.data.success) {
            setTodoBody({
                task: '',
                team: '',
            })
            alert('Task added successfully');
        }else{
            alert(response.data.message);
        }
    }
  return (
    <div>
        <InputForm addTodo={addTodo} todoBody={todoBody} setTodoBody={setTodoBody} />
        <div className="w-1/2 mx-auto mt-10">
        {
            todos && todos.map((todo, index) => {
                return (
                    <div key={index} className="mt-4 flex items-center p-4 border-b border-gray-300">
                        <p className="text-gray-700 mr-4">{todo.task}</p>
                        <p>{todo.team}</p>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Todo