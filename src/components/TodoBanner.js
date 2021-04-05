import React from 'react'

function TodoBanner({name, todoCount}) {
    return (
        <h4 className="bg-primary text-white text-center p-2">
            {name}'s To Do List
            ({todoCount} items to do)
        </h4>
    )
}

export default TodoBanner
