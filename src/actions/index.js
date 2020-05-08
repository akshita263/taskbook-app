let nextId = 0
export const addtodo =(text) =>({
    type: "ADD_TODO",
    id: nextId++,
    text
})

export const toggletodo =(id) =>({
    id,
    type: 'TOGGLE_TODO'
})