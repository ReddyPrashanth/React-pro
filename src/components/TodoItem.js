import React from 'react'

function TodoItem(props) {
    return (
        <tr key={props.item.action}>
            <td>{props.item.action}</td>
            <td>
            <input type="checkbox" checked={props.item.done} onChange={() => props.toggleTodo(props.item)}/>
            </td>
        </tr>
    )
}

export default TodoItem
