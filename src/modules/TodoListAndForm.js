const SUBMIT_TODO = "TodoListAndForm::SUBMIT_TODO";

export const submitTodo = todo => ({
  type: SUBMIT_TODO,
  payload: { todo }
});

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_TODO:
      const todo = action.payload.todo.set("id", state.todos.length);
      return { todos: [...state.todos, todo] };
    default:
      return state;
  }
};
