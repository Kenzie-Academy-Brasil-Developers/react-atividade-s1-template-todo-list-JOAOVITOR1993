
export const TodoList = ({todos, handleTodo}) =>{

    return(
        <ul>
            {
                todos.map((todo, index) =>{
                return (
                    <li key={index}>
                    <p>{todo}</p>
                    <button onClick={() => handleTodo(todo)}>Concluir tarefa</button>
                </li>
                )
                })
            }
        </ul>
    )
}