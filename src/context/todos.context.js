//todos
//all the methods to interact w/ todos
import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
  { id: 1, task: 'Wash dishes', completed: false },
  { id: 2, task: 'Make dinner', completed: true },
]

export const TodosContext = createContext()

export const TodosProvider = (props) => {
  const todosList = useTodoState(defaultTodos)
  return (
    <TodosContext.Provider value={todosList}>
      {props.children}
    </TodosContext.Provider>
  )
}
