const ADD_TODO = "ADD_TODO";

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: { todo }
});

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = action.payload.todo.set("id", state.todos.length);
      return { todos: [...state.todos, todo] };
    default:
      return state;
  }
};
