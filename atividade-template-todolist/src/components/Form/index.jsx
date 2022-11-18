import { useState } from "react"


export const Form = ({addTodo}) =>{
    const [valueInput, setValueInput] = useState("")

    return(
        <form>
            <input 
            type="text" 
            placeholder="Nova tarefa"
            onChange={(event) => setValueInput(event.target.value)}
            />
            <button onClick={(event) => event.preventDefault(addTodo(valueInput))} type="submit">Enviar</button>
        </form>
    )
}